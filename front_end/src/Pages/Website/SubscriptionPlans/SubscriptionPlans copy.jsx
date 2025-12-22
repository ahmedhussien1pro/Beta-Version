// PricingSection.jsx
import React from 'react';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faRocket,
  faUsers,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './pricing.css';

const plans = [
  {
    key: 'free',
    title: 'FREE PLAN',
    price: '$0',
    period: '/ Month',
    icon: faStar,
    highlight: false,
    features: [
      { label: 'Access to Beginner Labs', available: true },
      { label: 'Access to Intermediate Labs', available: true },
      { label: 'Advanced Labs', available: false },
      { label: 'Virtual Machines', available: false },
      { label: 'Certificates', available: false },
    ],
  },
  {
    key: 'pro',
    title: 'PRO',
    price: '$3',
    period: '/ Month',
    icon: faRocket,
    highlight: true,
    features: [
      { label: 'All features from Free', available: true },
      { label: 'Full Access to Advanced Labs', available: true },
      { label: 'Virtual Machines (VMs)', available: true },
      { label: 'Verified Certificates', available: true },
      { label: 'Mentoring Sessions', available: true },
    ],
  },
  {
    key: 'enterprise',
    title: 'ENTERPRISE',
    price: '$30',
    period: '/ Month',
    icon: faUsers,
    highlight: false,
    features: [
      { label: 'All features from Pro', available: true },
      { label: 'Team Management Dashboard', available: true },
      { label: 'Dedicated Labs', available: true },
      { label: 'Dedicated Support', available: true },
      { label: 'Detailed Performance Reports', available: true },
    ],
  },
];

const comparisonFeatures = [
  {
    label: 'Personal hackable Instances',
    free: true,
    pro: true,
    enterprise: true,
  },
  { label: 'Hacking challenges', free: true, pro: true, enterprise: true },
  {
    label: 'Learning content',
    free: 'Free rooms',
    pro: 'All rooms',
    enterprise: 'All rooms',
  },
  {
    label: 'Full access to learning paths',
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    label: 'Web-based AttackBox & Kali',
    free: '1 hour/day',
    pro: 'Unlimited',
    enterprise: 'Unlimited',
  },
  { label: 'Access to Network', free: false, pro: true, enterprise: true },
  { label: 'Faster machines', free: false, pro: true, enterprise: true },
  {
    label: 'Private OpenVPN servers',
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    label: 'Private King of the hill game',
    free: false,
    pro: true,
    enterprise: true,
  },
  { label: 'Custom learning paths', free: false, pro: false, enterprise: true },
  { label: 'Assignments', free: false, pro: false, enterprise: true },
  {
    label: 'Advanced Team Reporting',
    free: false,
    pro: false,
    enterprise: true,
  },
  { label: 'Transferable licenses', free: false, pro: false, enterprise: true },
];

const PricingSection = () => {
  return (
    <Container className='pricing-section'>
      {/* Pricing Cards */}
      <Row className='pricing-section__cards mb-5'>
        {plans.map((plan) => (
          <Col key={plan.key} xs={12} md={6} lg={4} className='mb-4'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <Card
                className={`pricing-card ${
                  plan.highlight ? 'pricing-card--highlight' : ''
                } text-center text-light`}>
                {plan.highlight && (
                  <div className='pricing-card__ribbon'>POPULAR</div>
                )}
                <Card.Body>
                  <FontAwesomeIcon
                    icon={plan.icon}
                    size='3x'
                    className='mb-3'
                  />
                  <Card.Title className='mb-2'>{plan.title}</Card.Title>
                  <h2 className='pricing-card__price'>
                    {plan.price}{' '}
                    <span className='pricing-card__period'>{plan.period}</span>
                  </h2>
                  <ul className='pricing-card__features list-unstyled mt-3 mb-4'>
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`pricing-card__feature ${
                          feature.available
                            ? 'pricing-card__feature--available'
                            : 'pricing-card__feature--unavailable'
                        }`}>
                        <FontAwesomeIcon
                          icon={feature.available ? faCheck : faXmark}
                          className='me-2'
                        />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? 'primary' : 'outline-light'}>
                    Choose Plan
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Comparison Table */}
      <Row className='pricing-section__comparison'>
        <Col>
          <h3 className='pricing-section__comparison-title text-center mb-4'>
            Compare Plans
          </h3>
          <Table
            responsive
            bordered
            hover
            className='pricing-section__table text-light'>
            <thead>
              <tr>
                <th>Plan Features</th>
                <th>Free</th>
                <th>Pro</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, idx) => (
                <tr key={idx}>
                  <td>{feature.label}</td>
                  <td>
                    {typeof feature.free === 'boolean' ? (
                      <FontAwesomeIcon
                        icon={feature.free ? faCheck : faXmark}
                      />
                    ) : (
                      feature.free
                    )}
                  </td>
                  <td>
                    {typeof feature.pro === 'boolean' ? (
                      <FontAwesomeIcon icon={feature.pro ? faCheck : faXmark} />
                    ) : (
                      feature.pro
                    )}
                  </td>
                  <td>
                    {typeof feature.enterprise === 'boolean' ? (
                      <FontAwesomeIcon
                        icon={feature.enterprise ? faCheck : faXmark}
                      />
                    ) : (
                      feature.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingSection;
