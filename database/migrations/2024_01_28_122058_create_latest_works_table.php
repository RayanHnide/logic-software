<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('latest_works', function (Blueprint $table) {
            $table->id();
            $table->string("title_en");
            $table->string("slug")->unique();
            $table->string("title_ar")->nullable();
            $table->string("subTitle_en");
            $table->string("subTitle_ar")->nullable();
            $table->text("summary_en");
            $table->text("summary_ar")->nullable();
            $table->string("coverPhotoUrl");
            $table->string("externalLink")->nullable();
            $table->longText("description_en");
            $table->longText("description_ar")->nullable();
            $table->string("quote_en")->nullable();
            $table->string("quote_ar")->nullable();
            $table->boolean("visible")->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('latest_works');
    }
};
