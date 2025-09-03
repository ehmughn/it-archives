import "../../css/Course.css";

import Title from "../../components/Title";
import Definition from "../../components/topic-contents/Definition";
import List from "../../components/topic-contents/List";
import FormulaBox from "../../components/topic-contents/FormulaBox";

import type { Content } from "../../components/topic-contents/List";
import LessonNumber from "../../components/buttons/LessonNumber";
import { useState } from "react";

function AdvancedNetworking() {
  const [lessonNumber, setLessonNumber] = useState("All");

  const lessonNumberButtonsClicked = (data: string) => {
    setLessonNumber(data);
    console.log(data);
  };

  const renderLesson1 = () => {
    const prosOfWAP: Content[] = [
      {
        title: "Wireless Connectivity",
        content:
          "using WAP, users can connect devices wirelessly and without the need for cables.",
        type: "inline",
      },
      {
        title: "Expanded Coverage",
        content:
          "users can connect to the network wirelessly from various locations within the coverage area.",
        type: "inline",
      },
    ];

    const consOfWAP: Content[] = [
      {
        title: "Range Limitations",
        content:
          "due to limited range, wireless access points can create dead spots or areas with weak or no connectivity, hindering user mobility.",
        type: "inline",
      },
      {
        title: "Network Congestion",
        content:
          "when data traffic overwhelms the network's capacity, wireless access points experience congestion, leading to decreased performance for all connected devices.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 1: Wireless Access Point</h1>
        <Definition
          title="What is Wireless Access Point (WAP)"
          meaning={
            "WAP is a networking device that enables wired networks accessible to wirelessly capable devices."
          }
        />
        <Definition
          title="How does it work"
          meaning={
            "It enables communication between wireless devices and the wired network structure by working as a link between them."
          }
        />
        <Definition
          title="When do we use WAP"
          meaning={
            "WAPs are deployed when extra Wi-Fi coverage or capacity is needed."
          }
        />
        <List title="WAP Pros" content={prosOfWAP} />
        <List title="WAP Cons" content={consOfWAP} />
      </>
    );
  };
  const renderLesson2 = () => {
    const addsBreakdown: Content[] = [
      {
        title: "Centralized Management",
        content:
          "AD DS provides a single point for managing users, computers, and other network resources, simplifying administration.",
        type: "inline",
      },
      {
        title: "Identity and Access Management",
        content:
          "It authenticates users and controls their access to network resources, ensuring only authorized individuals can access specific data and applications.",
        type: "inline",
      },
      {
        title: "Hierarchical Structure",
        content:
          "AD DS organizes resources into a logical structure (domains, organizational units, etc.) for easier management and scalability.",
        type: "inline",
      },
      {
        title: "Security Features",
        content:
          "It enforces security policies, including password policies and access controls, to protect the network from unauthorized access and malicious activity.",
        type: "inline",
      },
      {
        title: "Single Sign-On (SSO)",
        content:
          "AD DS can facilitate SSO, allowing users to accesss multiple resources with a single login.",
        type: "inline",
      },
      {
        title: "Scalability",
        content:
          "AD DS is designed to scale with the needs of the organization, supporting large networks with many users and devices.",
        type: "inline",
      },
    ];
    const dnsExplanation: Content[] = [
      {
        title: "Human-Friendly Names",
        content:
          "We use domain names (e.g., example.com) because they are easy to remember and use.",
        type: "inline",
      },
      {
        title: "Machine-Readable Addresses",
        content:
          "Computers use IP addresses to identify and communicate with each other.",
        type: "inline",
      },
      {
        title: "DNS Servers",
        content:
          "DNS servers are specialized computers that store the mapping between domain names and IP addresses.",
        type: "inline",
      },
      {
        title: "The Process",
        content:
          "When you type a website address in your browser, your computer sends a request to a DNS server to find the corresponding IP address. The DNS server then provides the IP address, allowing your browser to connect to the correct server and retrieve the website's content.",
        type: "inline",
      },
      {
        title: "Importance",
        content:
          "Without DNS, we would have to remember and use long strings of numbers (IP addresses) to access websites, which would be extremely cumbersome.",
        type: "inline",
      },
    ];
    const dhcpExplanation: Content[] = [
      {
        title: "Dynamic IP Address Assignment",
        content:
          "DHCP servers maintain a pool of available IP addresses and lease them out to devices that request one. This eliminates the need for manual configuration of IP addresses on each device.",
        type: "inline",
      },
      {
        title: "Network Configuration Parameters",
        content:
          "Besides IP Addresses, DHCP servers also provide other essential network information, such as subnet mask, default gateway, and dns server address.",
        type: "inline",
      },
      {
        title: "DHCP Lease",
        content:
          "The IP address and configuration parameters are assigned for a specific duration, known as a lease. When the lease expires, the devices may request a renewal from the DHCP server.",
        type: "inline",
      },
      {
        title: "Client-Server Model",
        content:
          "DHCP operates on a client-server model. Clients (devices) request configuration information, and the DHCP server responds with the necessary details.",
        type: "inline",
      },
    ];
    const dhcpBenefits: Content[] = [
      {
        title: "Simplified network management",
        content:
          "Reduces the administrative burden of manually configuring IP addresses.",
        type: "inline",
      },
      {
        title: "Reduced errors",
        content: "Minimizes the risk of IP address conflicts.",
        type: "inline",
      },
      {
        title: "Flexibility and scalability",
        content: "Easily accommodates new devices joining the network.",
        type: "inline",
      },
      {
        title: "Guest network support",
        content:
          "Commonly used in public Wi-Fi networks to provide temporary IP addresses to visitors.",
        type: "inline",
      },
    ];
    const otherEssentialNetworkInformation: Content[] = [
      {
        title: "Subnet mask",
        content: "Defines the network and host portions of an IP address.",
        type: "inline",
      },
      {
        title: "Default gateway",
        content: "The router used to access other networks.",
        type: "inline",
      },
      {
        title: "DNS server address",
        content: "Used to translate domain names into IP addresses.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 2: Active Directory Roles</h1>
        <Definition
          title="Active Directory Domain Services (ADDS)"
          meaning="is a core component of Microsoft's Active Directory, acting as a centralized system for managing users, computers, and other resources within a network."
        />
        <List title="ADDS Detailed Breakdown" content={addsBreakdown} />
        <Definition
          title="Domain Name System (DNS)"
          meaning="acts as the internet's phonebook. It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 172.217.160.142), allowing devices to locate and connect to each other online."
        />
        <List title="DNS Detailed Explanation" content={dnsExplanation} />
        <Definition
          title="Dynamic Host Configuration Protocol (DHCP)"
          meaning="is a network server that automatically assigns IP addresses and other network configuration parameters to devices on a network. It dynamically provides these settings, allowing devices to connect to the network and communicate with other devices and networks."
        />
        <List title="DHCP Detailed Explanation" content={dhcpExplanation} />
        <List title="Benefits of DHCP" content={dhcpBenefits} />
        <List
          title="Other Essential Network Information"
          content={otherEssentialNetworkInformation}
        />
      </>
    );
  };

  const renderContent = () => {
    switch (lessonNumber) {
      case "All":
        return (
          <>
            {renderLesson1()}
            {renderLesson2()}
          </>
        );
      case "1":
        return renderLesson1();
      case "2":
        return renderLesson2();
    }
  };

  return (
    <div className="container">
      <Title text="Advanced Networking" />
      <div className="lesson-buttons">
        {["All", "1", "2"].map((num) => (
          <LessonNumber
            key={num}
            number={num}
            onClick={lessonNumberButtonsClicked}
          />
        ))}
      </div>
      <h1 className="lesson-indicator">
        {lessonNumber && `Lesson ${lessonNumber}`}
      </h1>
      {renderContent()}
      <p className="ending-message">You have reached the end of the page.</p>
    </div>
  );
}

export default AdvancedNetworking;
