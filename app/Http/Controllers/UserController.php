<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->only(["email", "password"]);
        $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", "string", "min:8"],
        ], $data);
        $d = null;
        $success = true;
        $message = null;
        if (!Auth::attempt($data)) {
            $message = "Wrong Email Or Password";
            $success = false;
        } else {
            $user = \auth()->user();
            $d = [
                "user" => $user,
                "token" => $user->createToken($request->fingerprint())->plainTextToken
            ];
        }
        return response()->json([
            "success" => $success,
            "message" => $message,
            "data" => $d
        ]);
    }

    public function logout()
    {
        \auth()->user()->tokens()->delete();
        return response()->json(["success" => true]);
    }

    public function ping() {
        return response()->json(["success" => true]);
    }
}
