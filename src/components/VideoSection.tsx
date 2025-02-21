
const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-julia-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Agente Integrado
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Crie em apenas 5 minutos um agente integrado no WhatsApp, Instagram
            ou site capaz de qualificar leads, agendar reuniões e direcionar ao checkout.
          </p>
          
          <div className="rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md">
            <video 
              controls 
              className="w-full"
            >
              <source src="/images/responda.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
