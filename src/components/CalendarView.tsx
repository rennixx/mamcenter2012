import { motion } from 'framer-motion';
import type { ClassCardProps } from './ClassCard';

interface CalendarViewProps {
  classes: ClassCardProps[];
  onEnroll: (classItem: ClassCardProps) => void;
}

const CalendarView = ({ classes, onEnroll }: CalendarViewProps) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'beginner':
        return 'bg-blue-100 text-blue-800 border-l-4 border-blue-500';
      case 'intermediate':
        return 'bg-primary/20 text-primary border-l-4 border-primary/60';
      case 'advanced':
        return 'bg-primary/40 text-white border-l-4 border-primary';
      default:
        return 'bg-gray-100 text-gray-800 border-l-4 border-gray-500';
    }
  };

  const getClassesForDayAndTime = (day: string, time: string) => {
    return classes.filter(
      (c) => c.day === day && c.startTime === time
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-x-auto"
    >
      <div className="min-w-[1200px] bg-white shadow-lg">
        {/* Header row with days */}
        <div className="grid grid-cols-8 border-b-2 border-primary">
          <div className="bg-primary text-white p-4 font-bold text-center">
            Time
          </div>
          {daysOfWeek.map((day) => (
            <div key={day} className="bg-primary text-white p-4 font-bold text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Time slot rows */}
        {timeSlots.map((time, rowIndex) => (
          <div
            key={time}
            className={`grid grid-cols-8 border-b border-gray-200 ${
              rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            {/* Time column */}
            <div className="p-4 font-semibold text-gray-700 text-sm border-r border-gray-200">
              {time}
            </div>

            {/* Day columns */}
            {daysOfWeek.map((day) => {
              const dayClasses = getClassesForDayAndTime(day, time);
              
              return (
                <div key={day} className="p-2 border-r border-gray-200 min-h-[80px]">
                  {dayClasses.map((classItem, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      onClick={() => onEnroll(classItem)}
                      className={`p-2 mb-1 text-xs cursor-pointer hover:scale-105 transition-transform duration-200 ${getTypeColor(
                        classItem.type
                      )}`}
                    >
                      <div className="font-bold mb-1 line-clamp-1">{classItem.className}</div>
                      <div className="text-xs opacity-90 mb-1">{classItem.instructor}</div>
                      <div className="font-semibold">
                        {classItem.availableSpots > 0 ? (
                          <span className="text-green-700">{classItem.availableSpots} spots</span>
                        ) : (
                          <span className="text-red-700">Full</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 border-l-4 border-blue-500"></div>
          <span className="text-sm font-semibold text-gray-700">Beginner</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary/20 border-l-4 border-primary/60"></div>
          <span className="text-sm font-semibold text-gray-700">Intermediate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary/40 border-l-4 border-primary"></div>
          <span className="text-sm font-semibold text-gray-700">Advanced</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarView;
