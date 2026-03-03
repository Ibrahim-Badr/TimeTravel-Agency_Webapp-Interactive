import { Clock, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Explorez les époques les plus fascinantes de l'histoire avec notre service de voyage temporel premium.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Paris 1889
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Crétacé -65M
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Florence 1504
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Sécurité temporelle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 TimeTravel Agency. Tous droits réservés.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>·</span>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
