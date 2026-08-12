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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('description');

            $table->enum('itemCategory', [
                'برمجة وتطوير',
                'تصميم',
                'تسويق',
                'تصوير',
                'مؤثرات بصرية'
            ]);
             $table->text('image')->nullable();

            $table->boolean('featured')->default(false);

            $table->boolean('status')->default(true);

            $table->integer('timeTook')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
