import format from 'date-fns/format';
export function NextEvent(nextEvent) {
    let textEvent="";
    let dateEvent="";
    let hourEvent="";
    if(!nextEvent.eventsList.isLoading){
        textEvent=nextEvent.eventsList.data.nextEvent.eve_description;
        dateEvent=nextEvent.eventsList.data.nextEvent.date;
        hourEvent=nextEvent.eventsList.data.nextEvent.time;
    }


  return (
      <div className="flex flex-col h-[100%] p-4 bg-blue-1 rounded-3xl justify-center ring-[1px] ring-[#11567D] shadow-md">
          <h2 className="clr-blue-3 subtitulo-pesado flex justify-center">
              Próximo Evento
          </h2>
          <div className="text-ellipsis overflow-hidden h-[5rem]">
              <h3 className="mt-3 texto text-white clr-blue-3">
                  {textEvent}
                  </h3>
          </div>
          <div className="mt-3 flex justify-between">
              <h2 className="subtitulo-pesado clr-blue-3">
               {hourEvent}
              </h2>
              <h2 className="subtitulo-pesado clr-blue-3">
              {dateEvent}
              </h2>
          </div>
      </div>
  );
}
