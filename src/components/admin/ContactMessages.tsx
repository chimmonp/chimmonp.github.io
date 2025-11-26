import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Mail, Building, Calendar } from "lucide-react";
import { format } from "date-fns";

interface Message {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
}

export const ContactMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Contact Messages</h2>

      {messages.length === 0 ? (
        <Card className="p-8 bg-card/50 border-border text-center">
          <p className="text-muted-foreground">No messages yet</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {messages.map((message) => (
            <Card key={message.id} className="p-6 bg-card/50 border-border hover:border-primary/30 transition-colors">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{message.name}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${message.email}`} className="hover:text-primary">
                          {message.email}
                        </a>
                      </div>
                      {message.company && (
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{message.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(message.created_at), 'MMM dd, yyyy')}
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-foreground whitespace-pre-wrap">{message.message}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
