<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'house_address' => fake()->streetAddress(),
            'state' => fake()->state(),
            'total_amount_consumed' => fake()->randomFloat(2, 1000, 10000),
            'units_consumed_in_current_month' => fake()->randomFloat(2, 100, 300)
        ];
    }
}
