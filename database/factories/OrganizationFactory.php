<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'company_address' => fake()->streetAddress(),
            'state' => fake()->state(),
            'total_amount_consumed' => fake()->randomFloat(2, 5000, 20000),
            'units_consumed_in_current_month' => fake()->randomFloat(2, 500, 1000)
        ];
    }
}
