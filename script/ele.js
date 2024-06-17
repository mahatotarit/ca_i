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
});