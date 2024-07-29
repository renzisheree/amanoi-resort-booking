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
            <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md dir">
              <h2 className="mb-2 text-xl font-bold">Chi tiết hoá đơn</h2>
              <p>
                <span className="font-bold">Số tiền:</span>{" "}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(paymentData.vnpAmount / 100))}
                ;
              </p>
              <p>
                <span className="font-bold">Mã ngân hàng:</span>{" "}
                {paymentData.vnpBankCode}
              </p>
              <p>
                <span className="font-bold">Loại thẻ:</span>{" "}
                {paymentData.vnpCardType}
              </p>
              <p>
                <span className="font-bold">Thông tin hoá đơn:</span>{" "}
                {paymentData.vnpOrderInfo}
              </p>
              <p>
                <span className="font-bold">Trạng thái:</span>{" "}
                {paymentData.vnpResponseCode == "00"
                  ? "Thanh Toán thành công!"
                  : "Thanh toán thất bại vui lòng thử lại sau!"}
              </p>

              <p>
                <span className="font-bold">Hoá đơn số</span>{" "}
                {paymentData.vnpTransactionNo}
              </p>
              <h3 className="text-lg italic text-center">
                Chúng tôi rất vui lòng được đón tiếp bạn!
              </h3>
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
