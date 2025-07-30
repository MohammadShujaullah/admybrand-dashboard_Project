import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  change?: string;
  positive?: boolean;
}

export default function MetricCard({ title, value, icon, change, positive = true }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow">

      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm">{title}</h4>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${positive ? 'text-green-600' : 'text-red-500'}`}>
              {positive ? '+' : '-'}{change}
            </p>
          )}
        </div>
        {icon && <div className="text-3xl text-blue-600">{icon}</div>}
      </div>
    </div>
  );
}
