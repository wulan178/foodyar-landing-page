import React from 'react'
import StatisticItem from '../molecules/ListItem/statisticItem'

export default function Statistics() {
    return (   
        <div className="container text-center number">
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12"></div>
                <StatisticItem title="MENU FOOD" number="180.000+" />
                <StatisticItem title="CHEFS" number="20.000+" />
                <StatisticItem title="COURSE" number="400.000+" />
                <StatisticItem title="ALUMNI" number="6.900.000" />
                <div className="col-lg-2 col-md-6 col-sm-12"></div>
            </div>
        </div>
    )
}