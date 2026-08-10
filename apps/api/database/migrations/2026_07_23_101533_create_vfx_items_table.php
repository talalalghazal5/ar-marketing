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
        Schema::create('vfx_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('itemId')
                ->unique()
                ->constrained('items')
                ->cascadeOnDelete();

            $table->longText('overview');
            $table->json('galleryVfx')->nullable();


            $table->text('result')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vfx_items');
    }
};