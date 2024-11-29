function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const partnerDiscount = parseFloat(document.getElementById('partnerDiscount').value) / 100;
    const customerDiscount = parseFloat(document.getElementById('customerDiscount').value) / 100;

    const partnerDiscountAmount = originalPrice * partnerDiscount;
    const priceAfterPartnerDiscount = originalPrice - partnerDiscountAmount;
    const customerDiscountAmount = priceAfterPartnerDiscount * customerDiscount;
    const finalPrice = priceAfterPartnerDiscount - customerDiscountAmount;

    const totalDiscountAmount = partnerDiscountAmount + customerDiscountAmount;

    const totalDiscountPercentage = ((totalDiscountAmount / originalPrice) * 100).toFixed(2);

    document.getElementById('displayOriginalPrice').textContent = `$${originalPrice.toFixed(2)}`;
    document.getElementById('displayDiscount').textContent = `Partner: $${partnerDiscountAmount.toFixed(2)}, Customer: $${customerDiscountAmount.toFixed(2)}`;
    document.getElementById('displayTotalDiscount').textContent = `$${totalDiscountAmount.toFixed(2)}`;
    document.getElementById('displayTotalDiscountPercentage').textContent = `${totalDiscountPercentage}%`;
    document.getElementById('displayFinalPrice').textContent = `$${finalPrice.toFixed(2)}`;
}
