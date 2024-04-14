<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Review extends Model
{
    use HasFactory;

    protected $guarded = ["id", "approved"];

    protected $hidden = ["id", "fingerPrint", "ip", "photoUrl", "approved"];

    protected $appends = ["photo"];

    public function getPhotoAttribute() {
        $path = $this->photoUrl;
        if ($path != null && Storage::disk("public")->exists($path)) {
            return Storage::disk("public")->url( $path);
        }
        return null;
    }

}
