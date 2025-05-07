import React from 'react';

const FormattingPricingTable = () => {
  const data = [
    {
      type: 'Target Journal Formatting',
      prices: [
        { days: 1, price: 0.037 },
        { days: 2, price: 0.033 },
        { days: 3, price: 0.03 },
        { days: 5, price: 0.026 },
        { days: 10, price: 0.022 },
      ],
    },
    {
      type: 'Camera Ready Formatting',
      prices: [
        { days: 2, price: 0.04 },
        { days: 3, price: 0.037 },
        { days: 5, price: 0.033 },
        { days: 10, price: 0.03 },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Formatting Type</th>
              <th>Turnaround Time<br/> (Days)</th>
              <th>Price per Assignment<br/> (US$)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((format, index) =>
              format.prices.map((entry, i) => (
                <tr key={`${index}-${i}`}>
                  {i === 0 && (
                    <td rowSpan={format.prices.length} className="fw-semibold">
                      {format.type}
                    </td>
                  )}
                  <td>{entry.days}</td>
                  <td>${entry.price.toFixed(3)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormattingPricingTable;
