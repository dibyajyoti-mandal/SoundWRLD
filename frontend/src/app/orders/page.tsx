import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Bose QC 100 (2)</td>
            <td className="py-6 px-1">On the way...</td>
          </tr>
          <tr className="text-sm md:text-base bg-gray-100 rounded-lg">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">11.01.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Beyerdynamic DT 990</td>
            <td className="py-6 px-1 text-green-600">Delivered</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;