const order = {
    customer: {
       address: {
        city: "Milano"}
    }
  }
;

if (!order?.customer?.address?.city) {
  console.log('City is required');
}