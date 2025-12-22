import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Background, useNodesState, useEdgesState } from 'reactflow';
import { FaLock, FaLockOpen } from 'react-icons/fa';

import 'reactflow/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cybersec-roadmap.css';

/* ===================== DATA ===================== */

const roles = [
  { id: 'fundamentals', label: 'Cybersecurity Fundamentals', color: '#0d6efd' },
  { id: 'pentest', label: 'Penetration Tester', color: '#22c55e' },
  { id: 'devsecops', label: 'DevSecOps Engineer', color: '#a855f7' },
  { id: 'blue', label: 'Blue Team / SOC Analyst', color: '#06b6d4' },
  { id: 'red', label: 'Red Team (Advanced)', color: '#ef4444' },
  { id: 'dfir', label: 'DFIR', color: '#f59e0b' },
  { id: 'threat', label: 'Threat Intelligence', color: '#ec4899' },
  { id: 'cloud', label: 'Cloud Security', color: '#38bdf8' },
];

const courses = {
  fundamentals: [
    { title: 'Introduction to Cybersecurity', link: '/courses/cyber-intro' },
    { title: 'Networking Essentials', link: '/courses/networking' },
    { title: 'Linux Essentials', link: '/courses/linux-basics' },
    { title: 'Windows Basics', link: '/courses/windows-basics' },
    {
      title: 'Security Concepts Fundamentals',
      link: '/courses/security-basics',
    },
  ],
  blue: [
    { title: 'Networking Fundamentals', link: '/courses/networking' },
    { title: 'Linux Basics', link: '/courses/linux-basics' },
    { title: 'Windows Security Basics', link: '/courses/windows-security' },
    { title: 'SIEM Fundamentals', link: '/courses/siem' },
    { title: 'Log Analysis & Monitoring', link: '/courses/log-analysis' },
    { title: 'Threat Hunting Essentials', link: '/courses/threat-hunting' },
    { title: 'SOC Use Cases & Playbooks', link: '/courses/soc-playbooks' },
    { title: 'Digital Forensics Basics', link: '/courses/forensics-basics' },
  ],
  pentest: [
    { title: 'Networking Essentials', link: '/courses/networking' },
    { title: 'Linux for Pentesters', link: '/courses/linux' },
    { title: 'Python for pentesters', link: '/courses/python-security' },
    { title: 'Web Hacking Basics', link: '/courses/web-hacking' },
    { title: 'Burp Suite Essentials', link: '/courses/burp' },
    { title: 'Web Application Pentesting', link: '/courses/web-pentest' },
    {
      title: 'Privilege Escalation (Windows + Linux)',
      link: '/courses/priv-esc',
    },
    { title: 'Active Directory Basics', link: '/courses/ad-basics' },
    { title: 'Active Directory Attacks', link: '/courses/ad-attacks' },
    { title: 'OSCP Preparation Path', link: '/courses/oscp' },
  ],
  cloud: [
    { title: 'Cloud Computing Basics', link: '/courses/cloud-basics' },
    {
      title: 'AWS IAM (Identity & Access Management)',
      link: '/courses/aws-iam',
    },
    { title: 'AWS Security Essentials', link: '/courses/aws-security' },
    { title: 'Azure Security Fundamentals', link: '/courses/azure-security' },
    { title: 'Kubernetes Security', link: '/courses/k8s-security' },
    { title: 'Cloud Pentesting', link: '/courses/cloud-pentest' },
  ],
  dfir: [
    {
      title: 'Incident Response Fundamentals',
      link: '/courses/incident-response',
    },
    { title: 'Disk Forensics Basics', link: '/courses/disk-forensics' },
    {
      title: 'Memory Forensics (Volatility)',
      link: '/courses/memory-analysis',
    },
    {
      title: 'Malware Reverse Engineering (Beginner)',
      link: '/courses/malware-re',
    },
    { title: 'Advanced IR Playbooks', link: '/courses/advanced-ir' },
  ],
  threat: [
    { title: 'OSINT Basics', link: '/courses/osint' },
    {
      title: 'Threat Intelligence Fundamentals',
      link: '/courses/threat-intel',
    },
    { title: 'IOC Analysis (Indicators of Compromise)', link: '/courses/ioc' },
    { title: 'MITRE ATT&CK for Intelligence', link: '/courses/mitre-ti' },
    { title: 'Malware Analysis Basics', link: '/courses/malware-analysis' },
  ],
  devsecops: [
    { title: 'Linux & Networking Basics', link: '/courses/linux-basics' },
    { title: 'Docker Fundamentals', link: '/courses/docker' },
    { title: 'CI/CD Pipeline Basics', link: '/courses/cicd' },
    { title: 'Kubernetes Fundamentals', link: '/courses/k8s' },
    { title: 'SAST / DAST Essentials', link: '/courses/sast-dast' },
    { title: 'DevSecOps Full Path', link: '/courses/devsecops' },
  ],
  red: [
    { title: 'Advanced Networking & Linux', link: '/courses/linux-advanced' },
    { title: 'Active Directory Attacks', link: '/courses/ad-attacks' },
    { title: 'Privilege Escalation (Advanced)', link: '/courses/priv-esc-adv' },
    { title: 'AV/EDR Evasion Techniques', link: '/courses/av-bypass' },
    { title: 'C2 Frameworks & OPSEC', link: '/courses/red-team-ops' },
    { title: 'Advanced Red Team Labs', link: '/courses/red-labs' },
    { title: 'OSCP Path', link: '/courses/oscp' },
  ],
};

/* ===================== HELPERS ===================== */

const radius = 350;

const getRoleColor = (id) => roles.find((r) => r.id === id)?.color || '#0d6efd';

const isRightSide = (x) => x >= 0;

/* ===================== COMPONENT ===================== */

export default function CybersecRoadmap() {
  const [zoomEnabled, setZoomEnabled] = useState(true);
  const [expandedRole, setExpandedRole] = useState(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(() =>
    createInitialNodes()
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(() =>
    createInitialEdges()
  );

  /* ===== Click Node ===== */
  const onNodeClick = useCallback(
    (_, node) => {
      if (node.id === 'root') return;

      if (expandedRole === node.id) {
        collapseAll();
      } else {
        expandRole(node.id);
      }
    },
    [expandedRole, nodes]
  );

  /* ===== Expand Role ===== */
  const expandRole = (roleId) => {
    collapseAll();

    setExpandedRole(roleId);

    const list = courses[roleId] || [];
    const roleNode = nodes.find((n) => n.id === roleId);

    const right = isRightSide(roleNode.position.x);
    const dir = right ? 1 : -1;

    const newNodes = [...nodes];
    const newEdges = [...edges];

    list.forEach((c, i) => {
      const id = `${roleId}-course-${i}`;

      newNodes.push({
        id,
        type: 'default',
        data: {
          label: (
            <a href={c.link} className='roadmap__course-link'>
              {c.title}
            </a>
          ),
        },
        position: {
          x: roleNode.position.x + dir * 260,
          y: roleNode.position.y + i * 90,
        },
        className: 'roadmap__node roadmap__node--course',
        style: {
          border: `2px solid ${getRoleColor(roleId)}`,
          width: 200,
          opacity: 0,
        },
      });

      newEdges.push({
        id: `e-${roleId}-${id}`,
        source: roleId,
        target: id,
        animated: true,
        style: {
          stroke: getRoleColor(roleId),
          strokeWidth: 2,
        },
      });

      // smooth fade animation
      setTimeout(() => {
        setNodes((nds) =>
          nds.map((n) =>
            n.id === id ? { ...n, style: { ...n.style, opacity: 1 } } : n
          )
        );
      }, i * 120);
    });

    fadeOtherNodes(roleId);
    setNodes(newNodes);
    setEdges(newEdges);
  };

  /* ===== Fade Other Nodes ===== */
  const fadeOtherNodes = (activeId) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id !== 'root' && !n.id.includes('course') && n.id !== activeId
          ? { ...n, style: { ...n.style, opacity: 0.1 } }
          : n
      )
    );
  };

  /* ===== Collapse Everything ===== */
  const collapseAll = () => {
    setNodes((nds) =>
      nds
        .filter((n) => !n.id.includes('course'))
        .map((n) => ({
          ...n,
          style: { ...n.style, opacity: 1 },
        }))
    );

    setEdges((eds) => eds.filter((e) => !e.id.includes('course')));

    setExpandedRole(null);
  };

  /* ===== Auto Expand Animation ===== */
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i >= roles.length) {
        i = 0;
      }
      expandRole(roles[i].id);
      i++;
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container-fluid roadmap__container p-4'>
      <div className='row roadmap__row gy-4'>
        <div className='col-lg-5 col-md-12 roadmap__left'>
          <div className='card roadmap__card h-100  border-0'>
            <div className='card-body p-4'>
              <h2 className='roadmap__title mb-4'>
                How to Use the Cybersecurity Roadmap
              </h2>
              <p className='roadmap__text mb-4'>
                This interactive map provides an overview of various
                cybersecurity career paths and recommended courses for each
                role.
              </p>
              <ul className='roadmap__list list-unstyled'>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>The central
                  node represents "Cybersec Paths".
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>Surrounding
                  nodes are different cybersecurity roles, arranged in a circle.
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>Click on a
                  role node to expand it and view a list of recommended courses.
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>Each course
                  is clickable and links to the corresponding course page.
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>Click the
                  same role again to collapse the courses.
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>The map
                  automatically cycles through each role for a demonstration.
                </li>
                <li className='mb-3'>
                  <i className='fa fa-circle-arrow-right me-2'></i>Use the
                  toggle button in the top-right corner to enable or disable
                  zooming and panning.
                </li>
                <li>
                  <i className='fa fa-circle-arrow-right me-2'></i>When zooming
                  is disabled, you can scroll the page normally.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-7 col-md-12 roadmap__right'>
          <div className='roadmap__flow shadow-sm  rounded overflow-hidden'>
            {/* Toggle Zoom Button */}
            <button
              onClick={() => setZoomEnabled((z) => !z)}
              className='roadmap__toggle btn btn-outline-primary'>
              {zoomEnabled ? <FaLockOpen /> : <FaLock />}
            </button>

            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={onNodeClick}
              nodesDraggable={false}
              zoomOnScroll={zoomEnabled}
              panOnDrag={zoomEnabled}
              zoomOnPinch={zoomEnabled}
              zoomOnDoubleClick={false}
              fitView>
              <Background color='var(--primary-bg)' gap={20} />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== INITIAL BUILDERS ===================== */

function createInitialNodes() {
  const nodes = [
    {
      id: 'root',
      data: { label: 'Cybersec Paths' },
      position: { x: 0, y: 0 },
      className: 'roadmap__node roadmap__node--root',
    },
  ];

  roles.forEach((role, i) => {
    const angle = (Math.PI * 2 * i) / roles.length;
    nodes.push({
      id: role.id,
      data: { label: role.label },
      position: {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      },
      className: `roadmap__node roadmap__node--role roadmap__node--${role.id}`,
    });
  });

  return nodes;
}

function createInitialEdges() {
  return roles.map((role) => ({
    id: `e-root-${role.id}`,
    source: 'root',
    target: role.id,
    animated: true,
    style: {
      stroke: role.color,
      strokeWidth: 2,
    },
  }));
}
