/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const basePrice = 40;
  const totalAmount = days * basePrice;

  if (days >= 7) {
    return totalAmount - 50;
  } else if (days >= 3) {
    return totalAmount - 20;
  } else {
    return totalAmount;
  }
}

module.exports = calculateRentalCost;
