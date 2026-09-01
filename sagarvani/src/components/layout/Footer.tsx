import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>
              <span className="font-heading font-bold text-lg uppercase tracking-wide">Sagarvani</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conversational marine decision-intelligence platform.
              Multi-agent ocean intelligence system for disaster management and operations.
            </p>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#product" className="hover:text-primary transition-colors">Product</Link></li>
              <li><Link href="#impact" className="hover:text-primary transition-colors">Impact</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Research & References</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">INCOIS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IMD</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ISRO Bhuvan / NRSC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bhoonidhi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">MOSDAC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">BHASHINI + Sarvam AI</a></li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div>
             <h4 className="font-heading font-semibold text-foreground mb-6">Other</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard Console</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} All rights reserved — Team Helios Luna, Dayananda Sagar University.</p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
