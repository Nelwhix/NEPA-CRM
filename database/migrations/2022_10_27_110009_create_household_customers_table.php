<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('household_customers', function (Blueprint $table) {
            $table->id();
            $table->string('house_address');
            $table->string('state');
            $table->float('total_amount_consumed');
            $table->float('units_consumed_in_current_month');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('household_customers');
    }
};
