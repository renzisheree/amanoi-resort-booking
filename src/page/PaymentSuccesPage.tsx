import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const vnpAmount = urlParams.get("vnp_Amount");
    const vnpBankCode = urlParams.get("vnp_BankCode");
    const vnpBankTranNo = urlParams.get("vnp_BankTranNo");
    const vnpCardType = urlParams.get("vnp_CardType");
    const vnpOrderInfo = urlParams.get("vnp_OrderInfo");
    const vnpPayDate = urlParams.get("vnp_PayDate");
    const vnpResponseCode = urlParams.get("vnp_ResponseCode");
    const vnpTmnCode = urlParams.get("vnp_TmnCode");
    const vnpTransactionNo = urlParams.get("vnp_TransactionNo");
    const vnpTransactionStatus = urlParams.get("vnp_TransactionStatus");
    const vnpSecureHash = urlParams.get("vnp_SecureHash");

    if (vnpTransactionStatus === "00") {
      setPaymentStatus(true);
    }

    setPaymentData({
      vnpAmount,
      vnpBankCode,
      vnpBankTranNo,
      vnpCardType,
      vnpOrderInfo,
      vnpPayDate,
      vnpResponseCode,
      vnpTmnCode,
      vnpTransactionNo,
      vnpSecureHash,
    });
  }, [location.search]);

  return (
    <div className="flex flex-col items-center justify-center">
      {paymentStatus ? (
        <>
          <h1 className="mb-4 text-3xl font-bold">Thanh toán thành công</h1>
          {paymentData && (
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold">Payment Details</h2>
              <p>
                <span className="font-bold">Amount:</span>{" "}
                {paymentData.vnpAmount}
              </p>
              <p>
                <span className="font-bold">Bank Code:</span>{" "}
                {paymentData.vnpBankCode}
              </p>
              <p>
                <span className="font-bold">Bank Transaction No:</span>{" "}
                {paymentData.vnpBankTranNo}
              </p>
              <p>
                <span className="font-bold">Card Type:</span>{" "}
                {paymentData.vnpCardType}
              </p>
              <p>
                <span className="font-bold">Order Info:</span>{" "}
                {paymentData.vnpOrderInfo}
              </p>
              <p>
                <span className="font-bold">Pay Date:</span>{" "}
                {paymentData.vnpPayDate}
              </p>
              <p>
                <span className="font-bold">Response Code:</span>{" "}
                {paymentData.vnpResponseCode}
              </p>

              <p>
                <span className="font-bold">Transaction No:</span>{" "}
                {paymentData.vnpTransactionNo}
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-red-500">Payment failed</div>
      )}
    </div>
  );
};

export default PaymentSuccessPage;
