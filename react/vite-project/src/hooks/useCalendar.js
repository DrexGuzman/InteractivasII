import { useState } from 'react';
import { add, eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, startOfToday, startOfWeek,
} from 'date-fns'

// Custom hook to handle calendar functionality
export const useCalendar = () => {

    // Initialize today's date
    let today = startOfToday()

    // State to store the selected day and current month
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))

    // Get the first day of the current month
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    // Generate an array of days for the current month
    let days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfMonth(endOfMonth(firstDayCurrentMonth)),
    })

    // Function to navigate to the previous month
    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    // Function to navigate to the next month
    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    // Return the calendar data and navigation functions
    return { days, firstDayCurrentMonth, nextMonth, previousMonth, selectedDay, setSelectedDay }
}

  