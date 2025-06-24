
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProfileCard from '@/components/ProfileCard';
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:john.doe@example.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/johndoe',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/johndoe',
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@johndoe',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="kontak" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Informasi
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Kiri - Profile Card */}
  <div className="flex justify-center">
    <ProfileCard
      name="Avan Ibrahim"
      title="UI/UX Designer"
      handle="avan.ibr"
      status="Online"
      contactText="Contact Me"
      avatarUrl="/img/aibr.png"
      showUserInfo={true}
      enableTilt={true}
      onContactClick={() => console.log('Contact clicked')}
    />
  </div>



         {/* Contact Form kanan */}
         <Card className="relative shadow-lg border border-white bg-white/10 backdrop-blur-md backdrop-saturate-150 text-gray-300 rounded-lg overflow-hidden">
  <CardHeader className="border-b border-black px-6 py-4 bg-black backdrop-blur-sm">
    <CardTitle className="text-2xl font-semibold text-gray-100">Kirim Pesan</CardTitle>
  </CardHeader>
  <CardContent className="px-6 py-6">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-400">Nama</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-black border border-black rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
            placeholder="Nama lengkap"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-400">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-black border border-black rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
            placeholder="your@mail.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-400">Pesan</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="bg-black border border-black rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
          placeholder="Pesan Anda"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-black border border-black rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  </CardContent>
</Card>



    </div>
  </div>     
</section>
  );
};

export default Contact;
