<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       User::query()->create([
           "name" => "Admin",
           "email" => "admin@logic-development.net",
           "password" => "l0G1cD3v2024",
           "isAdmin" => 1
       ]);
        // User::query()->create([
        //     "name" => "Admin",
        //     "email" => "a@g.com",
        //     "password" => "123123123",
        //     "isAdmin" => 1
        // ]);
    }
}
