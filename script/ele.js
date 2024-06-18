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

let contract_address_symbol;
let contract_address_name;

let contract_abi_textarea;
let abi_error_span;
let contract_setup_submit;

// ============ contract action ==============
let contract_action_input;
let contract_action_submit;

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

  contract_address_symbol = document.querySelector('#contract_address_symbol');
  contract_address_name = document.querySelector('#contract_address_name');

  contract_abi_textarea = document.querySelector('#contract_abi_textarea');
  abi_error_span = document.querySelector('#abi_error_span');
  contract_setup_submit = document.querySelector('#contract_setup_submit');

  // ============= contract action =============
  contract_action_input = document.querySelector('#contract_action_input');
  contract_action_submit = document.querySelector('#contract_action_submit');

});