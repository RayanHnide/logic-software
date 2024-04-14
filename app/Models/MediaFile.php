<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class MediaFile extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    protected $appends = ["fileURL"];

    protected $hidden = [
        "fileable_id",
        "fileable_type",
        "created_at",
        "updated_at"
    ];

    public function getFileURLAttribute() {
        if ($this->path != null && Storage::disk("public")->exists($this->path)) {
            return Storage::disk("public")->url($this->path);
        }
        return null;
    }

    public function fileable(){
        return $this->morphTo('fileable');
    }

    protected static function boot()
    {
        parent::boot();
        self::deleting(function ($model) {
            $path = $model->path;
            if ($path != null && Storage::disk("public")->exists($path)) {
                return Storage::disk("public")->delete($path);
            }
        });
    }
}
