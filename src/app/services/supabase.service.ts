import {Injectable} from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  saveBillAmount(unit: number, amount: number) {
    return this.supabase
      .from('bill_amounts')
      .insert([
        {unit, amount}
      ]).throwOnError()
  }

}
