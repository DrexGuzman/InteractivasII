export const useUpdateEventState = () => {
    // State to store the selected date
    const updateEvent = async (idEvent ) => {

        const response = await fetch('http://localhost/backend-interactivas-II/vinx-app/public/api/user/toke', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
          });
          const data = await response.json();
           const idUser = data.user_id;
        try {
            const response = await fetch(`http://localhost/backend-interactivas-II/vinx-app/public/api/events/updateState/${idEvent}/${idUser}`);
            if (!response.ok) {
                throw new Error('Failed to update event status');
            }
            const result = await response.json();
            console.log('Event status updated:', result);
            // Aquí puedes actualizar el estado local para reflejar los cambios en la UI
        } catch (error) {
            console.error('Error updating event status:', error);
        }
    };
    return { updateEvent };
  }
  