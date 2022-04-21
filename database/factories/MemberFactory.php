<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstname' => $this -> faker -> name(),
            'lastname' => $this->faker->name(),
            'totem' => $this->faker->name(),
            'gender' => $this->faker->randomElement(['Male','Female'])[0],
            'nationality' => 'Rwanda',
            'id_pp' => $this -> faker -> numerify('############'),
            'date_of_birth' => $this -> faker ->date(),
            'place_of_birth' => $this -> faker -> country(),
            'promise_year' => $this->faker->date(),
            'totem_year' => $this->faker->date(),
            'unit_affiliation' => $this->faker->name(),
            'residence' => $this -> faker -> country(),
            'location' => $this -> faker -> city(),
            'email' => $this->faker->unique()->safeEmail(),
            'telephone' => $this->faker->numerify('##########'),
            'education' => $this->faker->sentence(),
            'profession' => $this->faker->word(),
            'photo'=>'user_default.png',
            'bio' => $this -> faker -> paragraph(5),
            'joined_at' => $this->faker->date(),
            'status' => $this->faker->boolean(),
        ];
    }
}
