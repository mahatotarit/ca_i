let pre_btn;
let next_btn;

// ============ rpc setup ==============
let rpc_input_1;
let rpc_input_2;
let rpc_input_1_error;
let rpc_input_2_error;

let rpc_input_1_symbol;
let rpc_input_2_symbol;

let rpc_input_1_network;
let rpc_input_2_network;

let rpc_setup_submit_btn;


// ============ contract setup ==============
let contract_address_input;
let contract_address_error;

let contract_address_name;

let contract_abi_textarea;
let abi_error_span;
let contract_setup_submit;

// ============ contract action ==============
let contract_action_input;
let contract_action_submit;

// ============ Wallet setup ==============
let target_wallet_private_key_input;
let your_wallet_private_key_input;

let target_wallet_pri_key_in_error;
let your_wallet_pri_key_in_error;

let wallet_setup_submit;

// ======== paymtnt choose ==========
let payment_input;
let pay_choose_submit;

let good_gas_cost;
let better_gas_cost;
let best_gas_cost;

let all_slider;

document.addEventListener('DOMContentLoaded',function(){
  // ========  slide btn ========
  pre_btn = document.querySelector('#pre_btn');
  next_btn = document.querySelector('#next_btn');

  // ============= rpc setup =============
  rpc_input_1 = document.querySelector('#rpc_url1');
  rpc_input_2 = document.querySelector('#rpc_url2');

  rpc_input_1_error = document.querySelector('#rpc_input_1_error');
  rpc_input_2_error = document.querySelector('#rpc_input_2_error');

  rpc_input_1_symbol = document.querySelector('#rpc_input_1_symbol');
  rpc_input_2_symbol = document.querySelector('#rpc_input_2_symbol');

  rpc_input_1_network = document.querySelector('#rpc_input_1_network');
  rpc_input_2_network = document.querySelector('#rpc_input_2_network');

  rpc_setup_submit_btn = document.querySelector('#rpc_setup_submit');

  // ============= contract setup =============
  contract_address_input = document.querySelector('#contract_address_input');
  contract_address_error = document.querySelector('#contract_address_error');

  contract_address_name = document.querySelector('#contract_address_name');

  contract_abi_textarea = document.querySelector('#contract_abi_textarea');
  abi_error_span = document.querySelector('#abi_error_span');
  contract_setup_submit = document.querySelector('#contract_setup_submit');

  // ============= contract action =============
  contract_action_input = document.querySelector('#contract_action_input');
  contract_action_submit = document.querySelector('#contract_action_submit');

  // ============ Wallet setup ==============
  target_wallet_private_key_input = document.querySelector('#target_wallet_private_key_input');
  your_wallet_private_key_input = document.querySelector('#your_wallet_private_key_input');

  target_wallet_pri_key_in_error = document.querySelector('#target_wallet_pri_key_in_error');
  your_wallet_pri_key_in_error = document.querySelector('#your_wallet_pri_key_in_error');

  wallet_setup_submit = document.querySelector('#wallet_setup_submit');

  // ======= payment setup ===========
  payment_input = document.querySelectorAll('.payment_input');
  pay_choose_submit = document.querySelector('#pay_choose_submit');

  good_gas_cost = document.querySelector('#good_gas_cost');
  better_gas_cost = document.querySelector('#better_gas_cost');
  best_gas_cost = document.querySelector('#best_gas_cost');

  all_slider = document.querySelectorAll('.slide');
});

async function wait(sec) {
  await new Promise((res) => setTimeout(res, sec * 1000));
}
