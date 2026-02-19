// productsData.js
import { 
  FaMapMarkedAlt, 
  FaChartLine, 
  FaRobot,
  FaShieldAlt,
  FaArrowRight,
  FaCube,
  FaBrain,
  FaEye,
  FaDatabase,
  FaCogs,
  FaSatellite
} from 'react-icons/fa';

export const productsData = {
  categories: [
    {
      id: '1',
      name: 'Smart Gate Systems',
      icon: 'FaSatellite',
      description: 'AI-powered entry/exit automation',
      products: [
        {
          id: 'ai-smart-gate-enterprise',
          name: 'AI-Powered Smart Gate Operation and Yard Management Enterprise System',
          shortName: 'Smart Gate Enterprise',
          tagline: 'Complete AI-driven yard automation platform',
          description: 'End-to-end AI solution for container yards, ports, and logistics hubs that automates gate operations, optimizes slot allocation, manages traffic flow, and provides real-time visibility through digital twin technology.',
          
          // Hero Section
          hero: {
            title: 'AI-Powered Smart Gate',
            subtitle: '& Yard Management Enterprise System',
            description: 'Transform your yard operations with cutting-edge AI, computer vision, and machine learning technologies that automate processes, predict bottlenecks, and optimize every movement.',
            image: 'smart-gate-hero.jpg',
            cta: 'Request Demo'
          },
          
          // Overview
          overview: {
            problem: 'Manual yard operations lead to delays, errors, and inefficiencies costing logistics companies millions annually.',
            solution: 'Our AI-powered system automates gate operations, optimizes container placement, and provides real-time visibility for 30-40% faster turnaround.',
            valueProposition: [
              '30–40% faster truck turnaround',
              '25–35% reduction in re-handling costs',
              '20–30% higher yard throughput',
              'Better customer visibility (track & trace)',
              'Reduced manual effort (AI OCR + chatbots)',
              'Higher yard utilization (ML forecasting)',
              'Faster operations with reduced fraud (DL + vision at gates)'
            ]
          },
          
          // 6-Step Roadmap
          roadmap: [
            {
              step: 1,
              title: 'Data Foundation',
              description: 'Collect real-time GPS from trucks & trailers, CCTV for OCR & safety, IoT sensors (gate scanners, weighbridge, fuel, equipment telemetry). Build data lake (MySQL/Cloud DB + Data Pipeline) for AI training with historical datasets: Dwell times, slot re-handles, truck turnaround times.',
              icon: 'FaDatabase',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              step: 2,
              title: 'Gate Automation',
              description: 'Computer Vision AI: OCR to capture container numbers & truck plates at entry/exit. EIR Copy data extraction. Damage detection (DL/vision): Classify dents/rust/door issues on entry; auto attach images to job card/MNR. Auto mail to Operation Team and SL. NLP Chatbot (optional): For truck drivers to get entry status/slot info via WhatsApp/SMS.',
              icon: 'FaEye',
              color: 'from-purple-500 to-pink-500'
            },
            {
              step: 3,
              title: 'Smart Slot Allocation',
              description: 'Optimization Algorithm: AI assigns containers to slots minimizing future re-handles (short stay near gate, long stay at back). Supervised ML models trained on: Container dwell time prediction, Import vs Export demand forecast, Seasonal peaks (e.g., Diwali, Christmas shipping rush).',
              icon: 'FaChartLine',
              color: 'from-green-500 to-emerald-500'
            },
            {
              step: 4,
              title: 'Yard Traffic Optimization',
              description: 'Reinforcement Learning (RL): Input: Yard layout, truck flow, equipment status. Reward: Lower travel distance, reduced waiting time. Output: Best route for trucks & stackers. Container Tracking with Anomaly Detection AI to flag suspicious entries (wrong truck/overstay).',
              icon: 'FaRoute',
              color: 'from-orange-500 to-red-500'
            },
            {
              step: 5,
              title: 'Real-Time Visibility Dashboard',
              description: 'Digital Twin: Simulate congestion scenarios before applying in real yard. AI-powered dashboard showing: Yard heatmap (occupied vs free slots), Predicted truck turnaround times, Alerts for bottlenecks/delays. Integrate with CFS Software system and mobile app for managers.',
              icon: 'FaMapMarkedAlt',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              step: 6,
              title: 'Continuous Improvement',
              description: 'Train AI models weekly/monthly with fresh yard data. Run AI vs Manual benchmark: Track how much time/cost saved. Feedback loop: Supervisors confirm AI slotting/dispatch suggestions → system self-learns.',
              icon: 'FaCogs',
              color: 'from-cyan-500 to-blue-500'
            }
          ],
          
          // AI Features with Techniques & Tools
          aiFeatures: [
            {
              category: 'Gate OCR & Safety',
              techniques: ['Computer Vision', 'Deep Learning', 'Object Detection'],
              models: ['YOLO', 'OpenCV', 'CNN'],
              implementation: 'CCTV + Edge AI',
              description: 'Automated container number and truck plate recognition with real-time damage detection.',
              icon: 'FaEye'
            },
            {
              category: 'Slot Allocation',
              techniques: ['Supervised ML', 'Optimization Algorithms'],
              models: ['XGBoost', 'OR-Tools', 'Gradient Boosting'],
              implementation: 'Cloud/Edge',
              description: 'AI assigns containers to optimal slots minimizing future re-handles based on predicted dwell times.',
              icon: 'FaChartLine'
            },
            {
              category: 'Traffic Flow',
              techniques: ['Reinforcement Learning', 'Path Optimization'],
              models: ['DQN', 'PPO', 'Deep Q-Networks'],
              implementation: 'Real-time RL',
              description: 'Optimal route planning for trucks and stackers reducing travel distance and waiting time.',
              icon: 'FaRoute'
            },
            {
              category: 'Equipment Maintenance',
              techniques: ['Predictive ML', 'Time Series Analysis'],
              models: ['Random Forest', 'LSTM', 'XGBoost'],
              implementation: 'Predictive Analytics',
              description: 'Predict equipment failures and schedule maintenance proactively.',
              icon: 'FaCogs'
            },
            {
              category: 'Demand Forecasting',
              techniques: ['Time Series AI', 'Seasonal Analysis'],
              models: ['Prophet', 'ARIMA', 'LSTM'],
              implementation: 'Cloud ML',
              description: 'Predict container inflow/outflow volumes and peak yard utilization hours.',
              icon: 'FaChartBar'
            },
            {
              category: 'Digital Twin Simulation',
              techniques: ['Simulation + RL', 'What-If Analysis'],
              models: ['AnyLogic', 'Unity ML', 'Digital Twin'],
              implementation: 'Simulation Engine',
              description: 'Simulate congestion scenarios before applying in real yard operations.',
              icon: 'FaCloud'
            }
          ],
          
          // AI/ML/DL Capabilities
          aiCapabilities: [
            {
              title: 'AI-Powered Yard Visibility',
              items: [
                'IoT + GPS Sensors: Track container location, gate-in/out, dwell time',
                'Computer Vision (DL – CNN Models): Cameras at entry/exit points automatically detect container numbers (OCR on ISO codes), damages, and truck numbers',
                'Digital Twin Yard Map: A live AI-based yard map updated in real-time using telemetry, GPS, and ML predictions'
              ],
              icon: 'FaSatellite'
            },
            {
              title: 'Predictive Yard Planning',
              items: [
                'ML Algorithms (Random Forest, XGBoost, Gradient Boosting): Forecast container inflow/outflow volumes, Predict peak yard utilization hours/days',
                'AI-Optimized Slot Allocation: Deep Reinforcement Learning (DRL) recommends optimal slot assignment for incoming containers',
                'Criteria: minimize shuffle moves, maximize space utilization, reduce turnaround time'
              ],
              icon: 'FaBrain'
            },
            {
              title: 'Smart Container Tracking',
              items: [
                'Rule-based + ML anomaly detection: Alerts when a container is misplaced or exceeds dwell time SLA',
                'AI predicts idle containers & recommends repositioning',
                'Integration with EDI /API feeds: Real-time sync of container status (arrival, customs clearance, loaded, dispatched)',
                'AI Chatbot for Yard Queries: "Where is container MSKU1234567?" → Returns GPS coordinates, yard slot, and last handling event'
              ],
              icon: 'FaNetworkWired'
            },
            {
              title: 'Operational AI Use-Cases',
              items: [
                'Turnaround Time Optimization: ML models predict truck turnaround time based on queue length, equipment availability, and historical patterns',
                'Automated Damage Detection: Vision AI scans for dents, scratches, seal tampering at entry'
              ],
              icon: 'FaRobot'
            },
            {
              title: 'Decision Support & Analytics',
              items: [
                'AI Dashboards: Container heatmap (high dwell containers), KPI predictions: Yard Occupancy %, Dwell Time, Moves per Hour',
                'What-If Simulations: AI models simulate "what if 100 extra containers arrive tomorrow?"'
              ],
              icon: 'FaChartBar'
            }
          ],
          
          // Technical Specifications
          technicalSpecs: {
            aiModels: [
              { name: 'Computer Vision', value: 'YOLOv8, OpenCV, Custom CNN' },
              { name: 'ML Algorithms', value: 'XGBoost, Random Forest, Gradient Boosting' },
              { name: 'Deep Learning', value: 'LSTM, DQN, PPO (Reinforcement Learning)' },
              { name: 'Time Series', value: 'Prophet, ARIMA' },
              { name: 'Optimization', value: 'OR-Tools, Custom Algorithms' },
              { name: 'Simulation', value: 'AnyLogic, Unity ML-Agents' }
            ],
            integration: [
              { name: 'APIs', value: 'REST, WebSocket, GraphQL' },
              { name: 'Data Sources', value: 'GPS, CCTV, IoT Sensors, EDI Feeds' },
              { name: 'Database', value: 'MySQL, Cloud DB, Data Lake' },
              { name: 'Deployment', value: 'Cloud, On-premise, Edge AI' },
              { name: 'Integration', value: 'CFS Software, Mobile Apps, ERP' }
            ],
            performance: [
              { metric: 'OCR Accuracy', value: '98.5%' },
              { metric: 'Damage Detection', value: '95% Precision' },
              { metric: 'Processing Time', value: '<100ms per frame' },
              { metric: 'System Uptime', value: '99.9%' }
            ]
          },
          
          // Expected Gains
          expectedGains: [
            { value: '30-40%', label: 'Faster Truck Turnaround', icon: 'FaRocket' },
            { value: '25-35%', label: 'Reduced Re-handling Costs', icon: 'FaChartLine' },
            { value: '20-30%', label: 'Higher Yard Throughput', icon: 'FaArrowUp' },
            { value: '100%', label: 'Real-time Visibility', icon: 'FaEye' }
          ],
          
          // Client Value Proposition
          valueProps: [
            'Reduced manual effort (AI OCR + chatbots)',
            'Higher yard utilization (ML forecasting)',
            'Faster operations with reduced fraud (DL + vision at gates)'
          ],
          
          // Use Cases
          useCases: [
            {
              title: 'Port Operations',
              description: 'Streamline container handling at ports with automated gate operations and optimized yard planning.',
              industry: 'Maritime Ports'
            },
            {
              title: 'Logistics Yards',
              description: 'Optimize space utilization and reduce truck turnaround times in container freight stations.',
              industry: 'Logistics'
            },
            {
              title: 'Rail Terminals',
              description: 'Automate rail container tracking and intermodal operations with computer vision.',
              industry: 'Rail Transport'
            },
            {
              title: 'Distribution Centers',
              description: 'Enhance warehouse yard management with predictive analytics and real-time visibility.',
              industry: 'Warehousing'
            }
          ],
          
          // Integration Options
          integrations: [
            'CFS Software Systems',
            'Mobile Apps for Managers',
            'ERP Systems',
            'EDI Feeds',
            'Custom API Integration'
          ],
          
          // Screenshots/Demo Images
          media: {
            images: [
              { url: 'dashboard-heatmap.jpg', caption: 'Yard Heatmap Dashboard' },
              { url: 'gate-ocr.jpg', caption: 'AI Gate OCR in Action' },
              { url: 'digital-twin.jpg', caption: 'Digital Twin Simulation' }
            ],
            video: 'product-demo.mp4'
          },
          
          // Documentation Links
          docs: {
            datasheet: '/docs/smart-gate-datasheet.pdf',
            whitepaper: '/docs/ai-yard-management-whitepaper.pdf',
            caseStudies: '/case-studies/port-logistics'
          }
        }
      ]
    }
  ],
  
};
