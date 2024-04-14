<?php

namespace App\Http\Controllers;

use App\Models\LatestWork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class LatestWorkController extends Controller
{
    public function newLatestWork(Request $request)
    {
        $data = $request->all();
        $request->validate([
            'title_en' => ["required", "string"],
            'title_ar' => ["string"],
            'subTitle_en' => ["required", "string"],
            'subTitle_ar' => ["string"],
            'summary_en' => ["required", "string"],
            'summary_ar' => ["string"],
            'coverPhoto' => ["required", "file"],
            'externalLink' => ["string"],
            'description_en' => ["required", "string"],
            'description_ar' => ["string"],
            'quote_en' => ["string"],
            'quote_ar' => ["string"],
        ], $data);
        foreach (["title", "subTitle", "summary", "description", "quote"] as $str) {
            if ($request->has("${str}_en") && !$request->has("${str}_ar")) {
                $data["${str}_ar"] = $data["${str}_en"];
            }
        }
        $data["slug"] = Str::slug($data["title_en"]);
        $q = LatestWork::query()->where("title", $data["title_en"])->count();
        if ($q) {
            $data["slug"] .= "-" . ($q + 1);
        }
        $cover = $this->saveFile($request->file("coverPhoto"));
        if (!$cover) {
            return response()->json([
                "success" => false,
                "message" => "couldn't save cover photo",
            ],418);
        }
        $data["coverPhotoUrl"] = $cover;
        $l = LatestWork::query()->create($data);
        $this->saveModelFiles($request->file("files"), $l);
        return response()->json(["success" => true]);
    }

    public function editLatestWork(Request $request, LatestWork $lastWork) {
        $data = $request->except(["slug", "id"]);
        $request->validate([
            'title_en' => ["string"],
            'title_ar' => ["string"],
            'subTitle_en' => ["string"],
            'subTitle_ar' => ["string"],
            'summary_en' => ["string"],
            'summary_ar' => ["string"],
            'coverPhoto' => ["file"],
            'externalLink' => ["string"],
            'description_en' => ["string"],
            'description_ar' => ["string"],
            'quote_en' => ["string"],
            'quote_ar' => ["string"],
        ], $data);
        if ($request->has("title_en")) {
            $data["slug"] = Str::slug($data["title_en"]);
            if (LatestWork::query()->where("slug", $data["slug"])->count()) {
                $data["slug"] .= "-" . (LatestWork::query()->where("title", $data["title_en"])->count() + 1);
            }
        }
        if ($request->hasFile("coverPhoto")) {
            $path = $lastWork->coverPhotoUrl;
            $newCover = $this->saveFile($request->file("coverPhoto"));
            if ($newCover) {
                $data["coverPhotoUrl"] = $newCover;
                if ($path != null && Storage::disk("public")->exists($path)) {
                    return Storage::disk("public")->delete($path);
                }
            }
        }
        if ($request->has("files")) {
            $this->saveModelFiles($request->file("files"), $lastWork);
        }
        LatestWork::query()->where("id", $lastWork->id)->update($data);
        return response()->json(["success" => true]);
    }

    public function deleteLatestWork(LatestWork $lastWork) {
        $lastWork->mediaFiles()->delete();
        return response()->json(["success" => $lastWork->delete() ?? false]);
    }

    public function getAll() {
        return response()->json([
            "success" => true,
            "data" => LatestWork::query()->where("visible",true)->get()
        ]);
    }

    public function details(Request $request) {

        $data = $request->only(["slug"]);
        $request->validate([
            "slug" => ["required", "string"]
        ],$data);
        return response()->json([
            "success" => true,
            "data" => LatestWork::query()->where("slug",$data["slug"])->with(["mediaFiles"])->firstOrFail()
        ]);
    }

}
