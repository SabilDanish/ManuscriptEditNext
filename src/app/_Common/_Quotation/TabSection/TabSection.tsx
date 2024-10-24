import { useContext, useState } from "react";
import "./TabSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGem,
    faWebAwesome,
    // faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "@/app/context/AppContext";
import { CheckedItems, OnCheckboxChange, TabItem } from "@/app/utils/interfaces";


const tabItems = [
    {
        id: 1,
        title: "Top impact Scientific editing",
        icon: faGem,
        content: (onCheckboxChange: OnCheckboxChange, checkedItems: CheckedItems) => (
            <div className="addon-section">
                <h4>Add-Ons</h4>
                <ul className="addon-list">
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    onCheckboxChange(e, "Plagiarism Check - Turnitin", "add-ons", 100)
                                }
                            />
                            Plagiarism Check - Turnitin <span>$100</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Poster Presentation", "add-ons", 350)}
                            />
                            Poster Presentation <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "VIP Editor", "add-ons", 350)}
                            />
                            VIP Editor <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Simplified Abstract", "add-ons", 250)}
                            />
                            Simplified Abstract <span>$250</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    onCheckboxChange(e, "Journal Selection Assistant", "add-ons", 200)
                                }
                            />
                            Journal Selection Assistant <span>$200</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Graphical Abstract", "add-ons", 350)}
                            />
                            Graphical Abstract <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Scientific News Report", "add-ons", 400)}
                            />
                            Scientific News Report <span>$400</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Journal Submission", "add-ons", 180)}
                            />
                            Journal Submission <span>$180</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Artwork Editing", "add-ons", 350)}
                            />
                            Artwork Editing <span>$350</span>
                        </label>
                    </li>
                </ul>

                <h4>Free Services</h4>
                <ul className="free-services">
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Edit Unlimited'] || false}
                                onChange={(e) => onCheckboxChange(e, "Edit Unlimited", "free-services", 0)}
                            />
                            Edit Unlimited
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Cover Letter'] || false}
                                onChange={(e) => onCheckboxChange(e, "Cover Letter", "free-services", 0)}
                            />
                            Cover Letter
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Artwork Rework'] || false}
                                onChange={(e) => onCheckboxChange(e, "Artwork Rework", "free-services", 0)}
                            />
                            Artwork Rework
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Rejection Shield'] || false}
                                onChange={(e) => onCheckboxChange(e, "Rejection Shield", "free-services", 0)}
                            />
                            Rejection Shield
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Certificate Of Editing'] || false}
                                onChange={(e) => onCheckboxChange(e, "Certificate Of Editing", "free-services", 0)}
                            />
                            Certificate Of Editing
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Resubmission Support'] || false}
                                onChange={(e) => onCheckboxChange(e, "Resubmission Support", "free-services", 0)}
                            />
                            Resubmission Support
                        </label>
                    </li>
                </ul>
                <button className="order-btn">Add Now</button>
            </div>
        ),
    },
    {
        id: 2,
        title: "Scientific Editing",
        icon: faWebAwesome,
        content: (onCheckboxChange: OnCheckboxChange, checkedItems: CheckedItems) => (
            <div className="addon-section">
                <h4>Add-Ons</h4>
                <ul className="addon-list">
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    onCheckboxChange(e, "Plagiarism Check-iThenticate", "add-ons", 100)
                                }
                            />
                            Plagiarism Check-iThenticate <span>$100</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Poster Presentation", "add-ons", 350)}
                            />
                            Poster Presentation <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "VIP Editor", "add-ons", 350)}
                            />
                            VIP Editor <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Simplified Abstract", "add-ons", 250)}
                            />
                            Simplified Abstract <span>$250</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    onCheckboxChange(e, "Journal Selection Assistant", "add-ons", 200)
                                }
                            />
                            Journal Selection Assistant <span>$200</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Graphical Abstract", "add-ons", 350)}
                            />
                            Graphical Abstract <span>$350</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Scientific News Report", "add-ons", 400)}
                            />
                            Scientific News Report <span>$400</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Journal Submission", "add-ons", 180)}
                            />
                            Journal Submission <span>$180</span>
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                onChange={(e) => onCheckboxChange(e, "Artwork Editing", "add-ons", 350)}
                            />
                            Artwork Editing <span>$350</span>
                        </label>
                    </li>
                </ul>

                <h4>Free Services</h4>
                <ul className="free-services">
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Edit Unlimited'] || false}
                                onChange={(e) => onCheckboxChange(e, "Edit Unlimited", "free-services", 0)}
                            />
                            Edit Unlimited
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Cover Letter'] || false}
                                onChange={(e) => onCheckboxChange(e, "Cover Letter", "free-services", 0)}
                            />
                            Cover Letter
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Artwork Rework'] || false}
                                onChange={(e) => onCheckboxChange(e, "Artwork Rework", "free-services", 0)}
                            />
                            Artwork Rework
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Rejection Shield'] || false}
                                onChange={(e) => onCheckboxChange(e, "Rejection Shield", "free-services", 0)}
                            />
                            Rejection Shield
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Certificate Of Editing'] || false}
                                onChange={(e) => onCheckboxChange(e, "Certificate Of Editing", "free-services", 0)}
                            />
                            Certificate Of Editing
                        </label>
                    </li>
                    <li>
                        <label className="quotation-label">
                            <input
                                type="checkbox"
                                checked={checkedItems['Resubmission Support'] || false}
                                onChange={(e) => onCheckboxChange(e, "Resubmission Support", "free-services", 0)}
                            />
                            Resubmission Support
                        </label>
                    </li>
                </ul>
                <button className="order-btn">Add Now</button>
            </div>
        ),
    },
];




const TabsComponent: React.FC = () => {
    const [active, setActive] = useState<number>(1);
    const { setSelectedAddons, setFreeService, setCheckedItems, checkedItems, setPrices } = useContext(MainContext);

    const onCheckboxChange: OnCheckboxChange = (event, addonName, tag, price = 0) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            if (tag === "add-ons") {
                setSelectedAddons((prev) => [...prev, addonName]);
                setPrices((prev) => prev + price);
            } else {
                setFreeService((prev) => [...prev, addonName]);
                setPrices((prev) => prev + price);
            }
        } else {
            if (tag === "add-ons") {
                setSelectedAddons((prev) => prev.filter((addon) => addon !== addonName));
                setPrices((prev) => prev - price);
            } else {
                setFreeService((prev) => prev.filter((addon) => addon !== addonName));
                setPrices((prev) => prev - price);
            }
        }

        setCheckedItems((prev) => ({ ...prev, [addonName]: isChecked }));
    };

    return (
        <div className="wrapper">
            <div className="tabs">
                {tabItems.map(({ id, icon, title }) => (
                    <TabItemComponent
                        key={id}
                        icon={icon}
                        title={title}
                        onItemClicked={() => {
                            setActive(id);
                            setSelectedAddons([]);
                            setFreeService([]);
                            setCheckedItems({});
                        }}
                        isActive={active === id}
                        id={id}
                        activeId={active}
                    />
                ))}
            </div>
            <div className="content">
                {tabItems.map(({ id, content }) => {
                    return active === id ? content(onCheckboxChange, checkedItems) : null
                })}
            </div>
        </div>
    );
};

// Props for TabItemComponent
interface TabItemComponentProps {
    icon: any;
    title: string;
    onItemClicked: () => void;
    isActive: boolean;
    id: number;
    activeId: number;
}

const TabItemComponent: React.FC<TabItemComponentProps> = ({
    icon,
    title,
    onItemClicked,
    isActive,
    id,
    activeId,
}) => {
    
    return (
        <label
            className={`tabitem ${isActive ? "tabitem--active" : "tabitem--inactive"} col-lg-3 col-md-12`}
        >
            <div className="inpStart">
                <input
                    type="radio"
                    name="tabgroup"
                    checked={activeId === id}
                    onChange={onItemClicked}
                    className="tabitem__radio"
                />
            </div>

            <div className="tabitem__content">
                <FontAwesomeIcon icon={icon} style={{ fontSize: "28px", color: "#fdc043" }} />
                <p className="tabitem__title">{title}</p>
            </div>
        </label>
    );
};

export default TabsComponent;