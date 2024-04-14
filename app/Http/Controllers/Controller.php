<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function saveFile($file, $directory="latestWorks") {
        $fileName = Str::random(60) .'.'. $file->getClientOriginalExtension();
        return Storage::disk("public")->putFileAs(
            $directory, $file, $fileName);
    }

    public function saveModelFiles($files,&$model)
    {
        foreach ($files as $file) {
            $p = $this->saveFile($file, "latestWorks/media");
            $model->mediaFiles()->create([
                "path" => $p,
            ]);
        }
    }

}
