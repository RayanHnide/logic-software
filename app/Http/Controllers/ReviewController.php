<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function getAll() {
        return response()->json([
            "success" => true,
            "data" => Review::query()->where("approved", true)->get()->shuffle()
        ]);
    }

    public function createReview(Request $request) {
        $data = $request->only(["clientName", "comment", "rating"]);
        $request->validate([
            "clientName" => ["required", "string"],
            "comment" => ["string"],
            "rating" => ["required", "in:1,2,3,4,5"]
        ], $request->all());
        $data["fingerPrint"] = $request->fingerprint();
        $old = Review::query()->where("fingerPrint", $data["fingerPrint"])->where("created_at", ">=", Carbon::now()->subHours( 1));
        if ($old->count()) {
            return response()->json([
                "success" => false,
                "message" => "sorry, you cant review frequently!!"
            ]);
        }
        $data["ip"] = $request->ip();
        if ($request->has("photo")) {
            $data["photoUrl"] = $this->saveFile($request->file("photo"), "reviews");
        }
        Review::query()->create($data);
        return response()->json([
            "success" => true,
            "message" => "Thank you!"
        ]);
    }
}
