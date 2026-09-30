import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Phone, MapPin, User, MessageSquare } from 'lucide-react';
import { CartItem, WebsiteConfig, LeadItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  config: WebsiteConfig;
  onNewLead?: (lead: LeadItem) => void;
  roundedClass: string;
  palette: any;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  config,
  onNewLead,
  roundedClass,
  palette
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState<'yetkazib_berish' | 'olib_ketish'>('yetkazib_berish');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Calculate totals
  const totalAmount = cartItems.reduce((acc, item) => {
    const numeric = item.product.numericPrice || parseInt(item.product.price.replace(/[^0-9]/g, ''), 10) || 0;
    return acc + numeric * item.quantity;
  }, 0);

  const formattedTotal = totalAmount > 0 
    ? totalAmount.toLocaleString('uz-UZ') + ' UZS' 
    : '0 UZS';

  const totalItemsCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || cartItems.length === 0) return;

    setIsSubmitting(true);

    const orderItemsSummary = cartItems.map(i => ({
      name: i.product.name,
      qty: i.quantity,
      price: i.product.price
    }));

    const orderSummaryText = cartItems
      .map(i => `• ${i.product.name} (${i.quantity} dona) - ${i.product.price}`)
      .join('\n');

    const newLead: LeadItem = {
      id: 'order-' + Date.now(),
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      fullName: customerName,
      phone: customerPhone,
      serviceOrProduct: `🛒 Savat Buyurtmasi (${totalItemsCount} ta mahsulot)`,
      price: formattedTotal,
      address: customerAddress || undefined,
      deliveryType: deliveryType,
      orderItems: orderItemsSummary,
      totalAmount: formattedTotal,
      notes: notes || undefined,
      status: 'yangi'
    };

    if (onNewLead) {
      onNewLead(newLead);
    }

    // Try sending to Telegram if configured
    if (config.integrations?.sendToTelegram && config.integrations?.telegramBotToken && config.integrations?.telegramChatId) {
      try {
        const tgMessage = `🛍️ <b>Yangi Online Savat Buyurtmasi!</b>\n\n` +
          `👤 <b>Mijoz:</b> ${customerName}\n` +
          `📞 <b>Telefon:</b> ${customerPhone}\n` +
          `📍 <b>Yetkazish manzili:</b> ${customerAddress || 'Klinika/Do\'kondan olib ketish'}\n` +
          `🚚 <b>Yetkazish turi:</b> ${deliveryType === 'yetkazib_berish' ? 'Kuryer orqali' : 'Olib ketish'}\n` +
          `💰 <b>Umumiy summa:</b> ${formattedTotal}\n\n` +
          `📦 <b>Buyurtma tarkibi:</b>\n${orderSummaryText}\n\n` +
          (notes ? `💬 <b>Izoh:</b> ${notes}\n\n` : '') +
          `📅 <i>Vaqti: ${new Date().toLocaleString('uz-UZ')}</i>`;

        await fetch('/api/telegram/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            botToken: config.integrations.telegramBotToken,
            chatId: config.integrations.telegramChatId,
            message: tgMessage
          })
        });
      } catch (err) {
        console.error('Telegram dispatch error:', err);
      }
    }

    setIsSubmitting(false);
    setCheckoutStep('success');
    onClearCart();
  };

  const handleClose = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${roundedClass} ${palette.secondaryBg} flex items-center justify-center ${palette.primaryText}`}>
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Xaridlar Savati</h2>
                <p className="text-xs text-slate-500">
                  {cartItems.length > 0 ? `${totalItemsCount} ta element qo'shilgan` : "Savat bo'sh"}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutStep === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                      <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">Savatingiz hozircha bo'sh</h3>
                    <p className="text-xs text-slate-500 max-w-xs mb-6">
                      Katalogdan kerakli xizmat, dori-darmon yoki check-up paketlarni tanlang va savatga qo'shing.
                    </p>
                    <button
                      onClick={onClose}
                      className={`px-5 py-2.5 text-xs font-semibold text-white ${palette.primaryBtn} ${roundedClass}`}
                    >
                      Katalogni Ko'rish
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div 
                        key={item.product.id}
                        className={`p-3.5 bg-white border border-slate-200 ${roundedClass} flex gap-3 items-center shadow-xs`}
                      >
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name} 
                          className="w-16 h-16 object-cover rounded-lg border border-slate-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                            {item.product.price}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="w-6 h-6 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-slate-800 min-w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="w-6 h-6 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="O'chirish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Mahsulotlar soni:</span>
                    <span>{totalItemsCount} ta</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 text-sm pt-1 border-t border-slate-200">
                    <span>Jami to'lov:</span>
                    <span className="text-emerald-600">{formattedTotal}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ism va Familiyangiz *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Nodir Aliyev"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefon Raqamingiz *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Yetkazib Berish Turi
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('yetkazib_berish')}
                      className={`p-2.5 text-xs font-medium rounded-lg border text-center transition-all ${
                        deliveryType === 'yetkazib_berish'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      🚚 Kuryer orqali
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('olib_ketish')}
                      className={`p-2.5 text-xs font-medium rounded-lg border text-center transition-all ${
                        deliveryType === 'olib_ketish'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      🏪 Olib ketish
                    </button>
                  </div>
                </div>

                {deliveryType === 'yetkazib_berish' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Yetkazish Manzili *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Shahar, tuman, ko'cha va xonadon"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Qo'shimcha Izoh (ixtiyoriy)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Qo'shimcha istaklaringiz yoki yetkazish vaqti"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Orqaga
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-2 py-2.5 text-xs font-semibold text-white ${palette.primaryBtn} ${roundedClass} flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "Buyurtmani Tasdiqlash"}
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Buyurtmangiz Qabul Qilindi!
                </h3>
                <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                  {config.integrations?.successMessage || "Tez orada operatorimiz siz bilan bog'lanib buyurtmani yetkazish tafsilotlarini tasdiqlaydi."}
                </p>
                <button
                  onClick={handleClose}
                  className={`px-6 py-2.5 text-xs font-semibold text-white ${palette.primaryBtn} ${roundedClass}`}
                >
                  Yopish va Davom Etish
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {checkoutStep === 'cart' && cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold text-slate-900">
                <span>Jami Summa:</span>
                <span className="text-base text-emerald-600 font-extrabold">{formattedTotal}</span>
              </div>
              <button
                onClick={() => setCheckoutStep('checkout')}
                className={`w-full py-3 text-xs font-bold uppercase tracking-wider text-white ${palette.primaryBtn} ${roundedClass} flex items-center justify-center gap-2 shadow-lg`}
              >
                <span>Buyurtmani Rasmiylashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
