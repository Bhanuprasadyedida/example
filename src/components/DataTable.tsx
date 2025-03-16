import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// Define TypeScript interface for data
interface RowData {
  creative_id: string;
  creative_name: string;
  tags: string;
  country: string;
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
  ipm: number;
  ctr: number;
  spend: number;
  impressions: number;
  clicks: number;
  cpm: number;
  cost_per_click: number;
  cost_per_install: number;
  installs: number;
}

// Sample data
const data: RowData[] = [
  {
    creative_id: "120214081337200422",
    creative_name: "New Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 2.70011323055483,
    ctr: 0.844874,
    spend: 7.01,
    impressions: 11481,
    clicks: 97,
    cpm: 0.610574,
    cost_per_click: 0.072268,
    cost_per_install: 0.226129032258064,
    installs: 31,
  },
  {
    creative_id: "120214081106690422",
    creative_name: "New Creative 5",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 1.88356164383561,
    ctr: 0.770548,
    spend: 2.95,
    impressions: 5840,
    clicks: 45,
    cpm: 0.505137,
    cost_per_click: 0.065556,
    cost_per_install: 0.268181818181818,
    installs: 11,
  },
  {
    creative_id: "1202140963494904222",
    creative_name: "Creative 2",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives-Revised",
    ipm: 1.60375030841352,
    ctr: 0.826548,
    spend: 5.05,
    impressions: 8106,
    clicks: 67,
    cpm: 0.622995,
    cost_per_click: 0.075373,
    cost_per_install: 0.388461538461538,
    installs: 13,
  },
  {
    creative_id: "120214081106700422",
    creative_name: "New Creative 1",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0.66577896138482,
    ctr: 0.732357,
    spend: 0.75,
    impressions: 1502,
    clicks: 11,
    cpm: 0.499334,
    cost_per_click: 0.068182,
    cost_per_install: 0.75,
    installs: 1,
  },
  {
    creative_id: "120214096349510422",
    creative_name: "Creative 3",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives-Revised",
    ipm: 0.637348629700446,
    ctr: 0.478011,
    spend: 2.85,
    impressions: 6276,
    clicks: 30,
    cpm: 0.454111,
    cost_per_click: 0.095,
    cost_per_install: 0.7125,
    installs: 4,
  },
  {
    creative_id: "120214096349530422",
    creative_name: "Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives-Revised",
    ipm: 0.47192071731949,
    ctr: 0.589901,
    spend: 1.77,
    impressions: 4238,
    clicks: 25,
    cpm: 0.41765,
    cost_per_click: 0.078,
    cost_per_install: 0.885,
    installs: 2,
  },
  {
    creative_id: "120216118074910422",
    creative_name: "New App promotion ad",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "Test for Daga: boosting",
    ad_group: "Partnership",
    ipm: 0.47192071731949,
    ctr: 0.589901,
    spend: 1.77,
    impressions: 4238,
    clicks: 25,
    cpm: 0.41765,
    cost_per_click: 0.078,
    cost_per_install: 0.885,
    installs: 2,
  },
  {
    creative_id: "120214081106680422",
    creative_name: "New Creative 3",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214080965820422",
    creative_name: "Creative 2",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214078111440422",
    creative_name: "Creative 1",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214080965830422",
    creative_name: "Creative 3",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214080965840422",
    creative_name: "Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214096349500422",
    creative_name: "Creative 1",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives-Revised",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120214081106650422",
    creative_name: "New Creative 2",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120213756200020422",
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "ID",
    ad_network: "Meta",
    os: "unkown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120213756200020422",
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "IN",
    ad_network: "Meta",
    os: "unkown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
  {
    creative_id: "120213756200020422",
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "BR",
    ad_network: "Meta",
    os: "unkown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0,
    ctr: 0,
    spend: 0,
    impressions: 0,
    clicks: 0,
    cpm: 0,
    cost_per_click: 0,
    cost_per_install: 0,
    installs: 0,
  },
];

const DataTableComponent: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<RowData[]>(data);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Handle search filtering
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const filtered = data.filter((row) =>
      Object.values(row).some((field) =>
        String(field).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  // Handle row click to show preview
  const handleRowClick = (row: RowData) => {
    setSelectedRow(row);
  };

  // Handle modal opening
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Define columns inside the component
  const columns: TableColumn<RowData>[] = [
    {
      name: "Creative ID",
      selector: (row) => row.creative_id,
      sortable: true,
      cell: (row) => (
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => handleRowClick(row)}
        >
          {row.creative_id}
        </span>
      ),
    },
    { name: "Creative Name", selector: (row) => row.creative_name, sortable: true },
    { name: "Country", selector: (row) => row.country, sortable: true },
    { name: "Ad Network", selector: (row) => row.ad_network, sortable: true },
    { name: "Campaign", selector: (row) => row.campaign, sortable: true },
    { name: "Ad Group", selector: (row) => row.ad_group, sortable: true },
    { name: "IPM", selector: (row) => row.ipm, sortable: true },
    { name: "CTR", selector: (row) => row.ctr, sortable: true },
    { name: "Spend ($)", selector: (row) => row.spend, sortable: true },
    { name: "Impressions", selector: (row) => row.impressions, sortable: true },
    { name: "Clicks", selector: (row) => row.clicks, sortable: true },
    { name: "CPM ($)", selector: (row) => row.cpm, sortable: true },
    { name: "CPC ($)", selector: (row) => row.cost_per_click, sortable: true },
    { name: "CPI ($)", selector: (row) => row.cost_per_install, sortable: true },
    { name: "Installs", selector: (row) => row.installs, sortable: true },
  ];

  // Custom styles for DataTable
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#B497BD", // Darker shade of lavender
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Ad Performance Report</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles} // Apply custom styles
      />

      {/* Preview Box */}
      {selectedRow && (
        <div style={styles.previewBox} onClick={openModal}>
          <strong>Preview:</strong>
          <p>Creative Name: {selectedRow.creative_name}</p>
          <p>Country: {selectedRow.country}</p>
          <p>Ad Network: {selectedRow.ad_network}</p>
        </div>
      )}

      {/* Modal for full details */}
      {isModalOpen && selectedRow && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Full Details</h3>
            {Object.entries(selectedRow).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </p>
            ))}
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    maxWidth: "90%",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  },
  searchInput: {
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  previewBox: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "400px",
  },
  closeButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DataTableComponent;