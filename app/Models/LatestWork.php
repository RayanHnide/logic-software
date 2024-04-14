<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class LatestWork extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    protected $appends = ["cover"];

    protected $hidden = [
        "coverPhotoUrl",
        "visible",
        "created_at",
        "updated_at",
    ];

    public function getCoverAttribute() {
        $path = $this->coverPhotoUrl;
        if ($path != null && Storage::disk("public")->exists($path)) {
            return Storage::disk("public")->url( $path);
        }
        return null;
    }

    public function mediaFiles()
    {
        return $this->morphMany(MediaFile::class, 'fileable', 'fileable_type', 'fileable_id', 'id');
    }

    protected static function boot()
    {
        parent::boot();
        self::deleting(function ($model) {
            $path = $model->coverPhotoUrl;
            if ($path != null && Storage::disk("public")->exists($path)) {
                return Storage::disk("public")->delete($path);
            }
        });
    }
}
