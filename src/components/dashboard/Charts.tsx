'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Color palette matching gov.uk style
const COLORS = {
  primary: '#003087',
  secondary: '#00703C',
  tertiary: '#1D70B8',
  quaternary: '#D9B38C',
  quinary: '#4C2C92',
  senary: '#F47738',
  septenary: '#D53680',
  octonary: '#D4351C',
};

const CHART_COLORS = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.tertiary,
  COLORS.quaternary,
  COLORS.quinary,
  COLORS.senary,
  COLORS.septenary,
  COLORS.octonary,
];

// Custom label renderer for pie charts to avoid overlap
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  if (percent < 0.04) return null;
  
  return (
    <text
      x={x}
      y={y}
      fill="#2B2B2B"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="11"
      fontWeight="500"
    >
      {name} ({(percent * 100).toFixed(0)}%)
    </text>
  );
};

interface LineChartProps {
  data: { name: string; [key: string]: string | number }[];
  lines: { dataKey: string; name: string; color?: string }[];
  xAxisKey?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  height?: number;
}

export function GovLineChart({
  data,
  lines,
  xAxisKey = 'name',
  showGrid = true,
  showLegend = true,
  height = 300,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: '#2B2B2B', fontSize: 11 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
        />
        <YAxis
          tick={{ fill: '#2B2B2B', fontSize: 11 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DEE0E2',
            borderRadius: 0,
            fontSize: 12,
            color: '#2B2B2B',
          }}
          labelStyle={{ color: '#003087', fontWeight: 'bold' }}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ fontSize: 11, color: '#2B2B2B' }}
            iconType="line"
          />
        )}
        {lines.map((line, index) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.color || CHART_COLORS[index % CHART_COLORS.length]}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

interface BarChartProps {
  data: { name: string; [key: string]: string | number }[];
  bars: { dataKey: string; name: string; color?: string }[];
  xAxisKey?: string;
  layout?: 'horizontal' | 'vertical';
  showGrid?: boolean;
  showLegend?: boolean;
  stacked?: boolean;
  height?: number;
}

export function GovBarChart({
  data,
  bars,
  xAxisKey = 'name',
  layout = 'horizontal',
  showGrid = true,
  showLegend = true,
  stacked = false,
  height = 300,
}: BarChartProps) {
  const isVertical = layout === 'vertical';
  
  // For vertical charts, we need to ensure names are properly formatted
  // Create a new array with explicit displayName for the Y-axis
  const chartData = data.map((item, idx) => ({
    ...item,
    // Use name field but ensure it's a non-empty string, fallback to index-based label
    displayName: String(item.name || item[xAxisKey as keyof typeof item] || `Category ${idx + 1}`),
  }));
  
  if (isVertical) {
    // Vertical bar chart - bars go left to right, categories are on Y axis
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 140, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />}
          <XAxis
            type="number"
            tick={{ fill: '#2B2B2B', fontSize: 11 }}
            tickLine={{ stroke: '#DEE0E2' }}
            axisLine={{ stroke: '#DEE0E2' }}
          />
          <YAxis
            type="category"
            dataKey="displayName"
            tick={{ fill: '#2B2B2B', fontSize: 10, fontWeight: 500 }}
            tickLine={{ stroke: '#DEE0E2' }}
            axisLine={{ stroke: '#DEE0E2' }}
            width={130}
            tickFormatter={(value) => String(value)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DEE0E2',
              borderRadius: 0,
              fontSize: 12,
              color: '#2B2B2B',
            }}
            labelStyle={{ color: '#003087', fontWeight: 'bold' }}
            formatter={(value: number, name: string) => [value?.toLocaleString(), name]}
          />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: 11, color: '#2B2B2B' }}
              iconType="square"
            />
          )}
          {bars.map((bar, index) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color || CHART_COLORS[index % CHART_COLORS.length]}
              stackId={stacked ? 'stack' : undefined}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  // Horizontal bar chart - bars go up, categories are on X axis
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={chartData}
        layout="horizontal"
        margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
      >
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />}
        <XAxis
          dataKey="displayName"
          tick={{ fill: '#2B2B2B', fontSize: 10 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
          angle={-35}
          textAnchor="end"
          height={55}
          interval={0}
        />
        <YAxis
          tick={{ fill: '#2B2B2B', fontSize: 11 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DEE0E2',
            borderRadius: 0,
            fontSize: 12,
            color: '#2B2B2B',
          }}
          labelStyle={{ color: '#003087', fontWeight: 'bold' }}
          formatter={(value: number, name: string) => [value?.toLocaleString(), name]}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ fontSize: 11, color: '#2B2B2B' }}
            iconType="square"
          />
        )}
        {bars.map((bar, index) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            name={bar.name}
            fill={bar.color || CHART_COLORS[index % CHART_COLORS.length]}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

interface PieChartProps {
  data: { name: string; value: number }[];
  showLabels?: boolean;
  showLegend?: boolean;
  innerRadius?: number;
  height?: number;
}

export function GovPieChart({
  data,
  showLabels = true,
  showLegend = true,
  innerRadius = 0,
  height = 300,
}: PieChartProps) {
  const outerRadius = Math.max(50, Math.min(height / 3.5, 90));
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={showLabels}
          label={showLabels ? renderCustomizedLabel : false}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          fill="#003087"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DEE0E2',
            borderRadius: 0,
            fontSize: 12,
            color: '#2B2B2B',
          }}
          formatter={(value: number) => [value.toLocaleString(), 'Value']}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ fontSize: 10, color: '#2B2B2B' }}
            iconType="square"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

interface AreaChartProps {
  data: { name: string; [key: string]: string | number }[];
  areas: { dataKey: string; name: string; color?: string }[];
  xAxisKey?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  stacked?: boolean;
  height?: number;
}

export function GovAreaChart({
  data,
  areas,
  xAxisKey = 'name',
  showGrid = true,
  showLegend = true,
  stacked = false,
  height = 300,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: '#2B2B2B', fontSize: 11 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
        />
        <YAxis
          tick={{ fill: '#2B2B2B', fontSize: 11 }}
          tickLine={{ stroke: '#DEE0E2' }}
          axisLine={{ stroke: '#DEE0E2' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DEE0E2',
            borderRadius: 0,
            fontSize: 12,
            color: '#2B2B2B',
          }}
          labelStyle={{ color: '#003087', fontWeight: 'bold' }}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ fontSize: 11, color: '#2B2B2B' }}
            iconType="square"
          />
        )}
        {areas.map((area, index) => (
          <Area
            key={area.dataKey}
            type="monotone"
            dataKey={area.dataKey}
            name={area.name}
            stroke={area.color || CHART_COLORS[index % CHART_COLORS.length]}
            fill={area.color || CHART_COLORS[index % CHART_COLORS.length]}
            fillOpacity={0.2}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export { COLORS, CHART_COLORS };
