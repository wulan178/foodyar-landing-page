import React from 'react'

export default function StatisticItem(
    { number, title }
) {
    return (
        <div className="col-lg-2 col-md-6 col-sm-12">
            <h6 className="total">{number}</h6>
            <p className="number-title">{title}</p>
        </div>
    )
}
