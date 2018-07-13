<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreationListingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings',function(Blueprint $table){
            $table->primary('id');
            $table->unsignedInteger('id');
            $table->string('title');
            $table->string('address');
            $table->longText('about');

            $table->boolean('requirement_wifi')->default(false);
            $table->boolean('requirement_animaux_admis')->default(false);
            $table->boolean('requirement_tv')->default(false);
            $table->boolean('requirement_cuisine')->default(false);
            $table->boolean('requirement_petit_dej')->default(false);
            $table->boolean('requirement_laptop')->default(false);

            $table->string('prix_par_nuit')->nullable();
            $table->string('prix_extra_personne')->nullable();
            $table->string('reduction_pour_une_semaine')->nullable();
            $table->string('reduction_pour_un_mois')->nullable();

            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('listings');
    }
}
