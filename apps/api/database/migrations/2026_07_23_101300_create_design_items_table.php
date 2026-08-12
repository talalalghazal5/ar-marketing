<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('design_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('itemId')
                ->unique()
                ->constrained('items')
                ->cascadeOnDelete();
            $table->json('galleryDesign')->nullable();
            $table->json('brand_goals')->nullable();

            $table->longText('brandOverview');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('design_items');
    }
};
