"use client"

import Pricing from "@/app/_Common/_Quotation/Pricing/Pricing";
import QuotationDetails from "@/app/_Common/_Quotation/QuotationDetails/QuotationDetails";
import TabsComponent from "@/app/_Common/_Quotation/TabSection/TabSection";
import { MainContext } from "@/app/context/AppContext";
import { CheckedItems, MainContextType } from "@/app/utils/interfaces";
import { useState } from "react";

export default function Quotation() {
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [freeService, setFreeService] = useState<string[]>([]);
    const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
    const [prices, setPrices] = useState<number>(0);

    const removeFreeService = (service: string) => {
        setFreeService((prev) => prev.filter((addon) => addon !== service));
        setCheckedItems((prev) => ({ ...prev, [service]: false }));
    };

    let obj: MainContextType = {
        selectedAddons,
        setSelectedAddons,
        freeService,
        setFreeService,
        checkedItems,
        setCheckedItems,
        removeFreeService,
        prices,
        setPrices,
    };

    return (
        <>
            <MainContext.Provider value={obj}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pricing-section">
                                <Pricing />
                            </div>

                            <div className="tabs-section" style={{ marginTop: "20px" }}>
                                <TabsComponent />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <QuotationDetails />
                        </div>
                    </div>
                </div>
            </MainContext.Provider>
        </>
    )
}