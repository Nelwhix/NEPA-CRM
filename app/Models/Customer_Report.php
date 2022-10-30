<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer_Report extends Model
{
    use HasFactory;

    public function household_customer() {
        return $this->belongsTo(Household_Customer::class);
    }

    public function organization_customer() {
        return $this->belongsTo(Organization_Customer::class);
    }
}
