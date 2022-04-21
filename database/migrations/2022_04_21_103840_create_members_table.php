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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('totem')->nullable();
            $table->string('gender');
            $table->string('nationality')->default('Rwanda');
            $table->string('id_pp')->nullable();
            $table->date('date_of_birth')->default('1900-01-01');
            $table->string('place_of_birth')->nullable();
            $table->date('promise_year')->default('1900-01-01');
            $table->date('totem_year')->default('1900-01-01');
            $table->string('unit_affiliation')->nullable();
            $table->string('residence')->nullable();
            $table->string('location')->nullable();
            $table->string('email')->unique();
            $table->string('telephone')->nullable();
            $table->string('education')->nullable();
            $table->string('profession')->nullable();
            $table->string('photo')->nullable();
            $table->longText('bio')->nullable();
            $table->date('joined_at')->default('2017-01-29');
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('members');
    }
};
