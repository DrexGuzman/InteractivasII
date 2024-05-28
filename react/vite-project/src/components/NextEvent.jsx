export function NextEvent() {
  return (
      <div className="flex flex-col h-[100%] p-4 bg-blue-1 rounded-3xl justify-center ring-[1px] ring-[#11567D] shadow-md">
          <h2 className="clr-blue-3 subtitulo-pesado flex justify-center">
              Próximo Evento
          </h2>
          <div className="text-ellipsis overflow-hidden h-[5rem]">
              <h3 className="mt-3 texto text-white clr-blue-3">
                  Lorem ipsum dolor sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo facilisisLorem ipsum dolor sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo facilisis
              </h3>
          </div>
          <div className="mt-3 flex justify-between">
              <h2 className="subtitulo-pesado clr-blue-3">
                  25 Abr
              </h2>
              <h2 className="subtitulo-pesado clr-blue-3">
                  5:00pm
              </h2>
          </div>
      </div>
  );
}
