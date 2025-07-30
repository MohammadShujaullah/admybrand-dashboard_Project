'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Users, BarChart3, Activity } from 'lucide-react';
import MetricCard from '@/app/components/MetricCard';
import ChartCard from '@/app/components/ChartCard';
import DataTable from '@/app/components/DataTable';
import AnimatedMetricCard from '@/app/components/AnimatedMetricCard';
import AnimatedChartCard from '@/app/components/AnimatedChartCard';

// Real-time Metrics
export default function Home() {
  const [metrics, setMetrics] = useState({
    revenue: 12000,
    users: 3500,
    conversions: 278,
    growth: 4.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        revenue: parseFloat((prev.revenue * 1.0001).toFixed(2)),       // +0.01%
        users: Math.floor(prev.users * 1.001),                        // +0.01%
        conversions: Math.floor(prev.conversions * 1.01),            // +0.01%
        growth: parseFloat((prev.growth * 1.01).toFixed(2)),         // +0.01%
      }));
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, []);



  // Chart 1: Monthly Website Visitors (Line Chart)
  const visitorsData = [
    { name: 'Jan', value: 2200 },
    { name: 'Feb', value: 2800 },
    { name: 'Mar', value: 3500 },
    { name: 'Apr', value: 3900 },
    { name: 'May', value: 4200 },
    { name: 'Jun', value: 5100 },
    { name: 'Jul', value: 4800 },
  ];

  // Chart 2: Conversion Rate by Campaign (Bar Chart)
  const campaignData = [
    { name: 'Email', value: 5.4 },
    { name: 'Google Ads', value: 7.8 },
    { name: 'Facebook', value: 4.2 },
    { name: 'LinkedIn', value: 6.5 },
    { name: 'Instagram', value: 3.9 },
  ];

  // Chart 3: User Roles (Pie Chart)
  const userRoleData = [
    { name: 'Admin', value: 10 },
    { name: 'Editor', value: 18 },
    { name: 'Viewer', value: 24 },
  ];

  return (
    <main className="p-6 space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatedMetricCard index={0}>
          <MetricCard
            title="Revenue"
            value={`$${metrics.revenue.toLocaleString()}`}
            change="+0.001%"
            icon={<TrendingUp />}
            positive
          />
        </AnimatedMetricCard>
        <AnimatedMetricCard index={1}>
          <MetricCard
            title="Users"
            value={metrics.users.toLocaleString()}
            change="+0.01%"
            icon={<Users />}
            positive
          />
        </AnimatedMetricCard>
        <AnimatedMetricCard index={2}>
          <MetricCard
            title="Conversions"
            value={metrics.conversions.toLocaleString()}
            change="+0.1%"
            icon={<BarChart3 />}
            positive
          />
        </AnimatedMetricCard>
        <AnimatedMetricCard index={3}>
          <MetricCard
            title="Growth"
            value={`${metrics.growth.toFixed(1)}%`}
            change="+0.003%"
            icon={<Activity />}
            positive
          />
        </AnimatedMetricCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatedChartCard index={0}>
          <ChartCard title="Monthly Visitors" type="line" data={visitorsData} />
        </AnimatedChartCard>
        <AnimatedChartCard index={1}>
          <ChartCard title="Campaign Conversion Rate" type="bar" data={campaignData} />
        </AnimatedChartCard>
        <AnimatedChartCard index={2}>
          <ChartCard title="User Role Distribution" type="pie" data={userRoleData} />
        </AnimatedChartCard>
      </div>

      {/* Table */}
      <DataTable />
    </main>
  );
}
