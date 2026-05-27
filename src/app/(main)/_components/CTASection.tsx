'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EASE_OUT_QUINT } from '@/lib/motion';
import { extractDigits, formatPhone, isValidPhone } from '@/lib/phone';

type FormStatus = 'idle' | 'submitting' | 'success';

export function CTASection() {
  const [phone, setPhone] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const isValid = isValidPhone(phone);
  const showError = !isValid && (submitAttempted || (touched && phone !== ''));
  const errorId = 'cta-phone-error';
  const busy = status === 'submitting';

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      setSubmitAttempted(true);
      return;
    }
    if (busy) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setPhone('');
      setTouched(false);
      setSubmitAttempted(false);
    }, 700);
  };

  const handleReset = () => setStatus('idle');

  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="relative min-h-155 py-24 md:h-155 md:py-0">
        <Photo src="/img/dombay.png" alt="" style={{ position: 'absolute', inset: 0 }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, oklch(0.13 0.012 240 / 0.65) 0%, oklch(0 0 0 / 0.5) 50%, oklch(0.13 0.012 240 / 0.9) 100%)',
          }}
        />
        <Stagger
          className="reveal-in relative z-2 flex h-full flex-col items-center justify-center px-5 text-center md:px-16"
          childrenDelay={0.08}
          loose
        >
          <StaggerItem>
            <div className="st-eyebrow mb-6 md:mb-7">04 / подбор</div>
          </StaggerItem>
          <StaggerItem y={22}>
            <h2 className="st-h2 m-0 max-w-225">Подобрать тур.</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="st-lede mt-6 max-w-135">
              Оставьте номер телефона — менеджер расскажет подробнее о предстоящем путешествии.
            </p>
          </StaggerItem>

          <AnimatePresence mode="wait" initial={false}>
            {status === 'success' ? (
              <motion.div
                key="success"
                className="mt-9 flex w-full max-w-140 flex-col items-center gap-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE_OUT_QUINT }}
              >
                <p className="text-fg-1 text-[17px] leading-snug">
                  Заявка принята. Менеджер свяжется с вами в ближайшее время.
                </p>
                <Button variant="ghost-pill" size="pill" onClick={handleReset}>
                  Отправить ещё одну заявку
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="flex w-full flex-col items-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE_OUT_QUINT }}
              >
                <form
                  className="mt-9 flex w-full max-w-140 flex-col gap-3 md:flex-row md:gap-3"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Input
                    variant="pill"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+7 ___ ___ __ __"
                    aria-label="Телефон"
                    className="flex-1"
                    value={phone}
                    onChange={(e) => {
                      const next = e.target.value;
                      const inputType = (e.nativeEvent as InputEvent).inputType;
                      if (
                        inputType === 'deleteContentBackward' &&
                        next.length < phone.length &&
                        !/\d/.test(phone[next.length] ?? '')
                      ) {
                        setPhone(formatPhone(extractDigits(next).slice(0, -1)));
                        return;
                      }
                      setPhone(formatPhone(next));
                    }}
                    onBlur={() => setTouched(true)}
                    aria-invalid={showError || undefined}
                    aria-describedby={showError ? errorId : undefined}
                    disabled={busy}
                  />
                  <Button
                    type="submit"
                    variant="ice"
                    size="pill-lg"
                    className="px-8"
                    disabled={busy}
                  >
                    {busy ? 'Отправляем…' : 'Подобрать'}
                    {!busy && <Icon.arrowRight />}
                  </Button>
                </form>

                {showError && (
                  <p
                    id={errorId}
                    role="alert"
                    className="text-destructive mt-3 max-w-140 self-start text-left text-[13px] md:self-auto"
                  >
                    Введите телефон полностью в формате +7 (xxx) xxx-xx-xx.
                  </p>
                )}

                <div className="text-fg-2 mt-5 flex items-start justify-center gap-2">
                  <span className="mt-0.5">
                    <Icon.shield />
                  </span>
                  <span className="text-fg-2 max-w-105 text-left text-[13px]">
                    Нажимая «Подобрать», вы соглашаетесь с{' '}
                    <a
                      href="#"
                      className="text-fg-1 underline"
                      style={{ textDecorationColor: 'var(--color-hairline-strong)' }}
                    >
                      политикой обработки персональных данных
                    </a>
                    .
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <span className="text-fg-2 text-[13px]">или напишите в мессенджер:</span>
                  <Button asChild variant="ghost-pill" size="icon-pill-sm" aria-label="Telegram">
                    <a href="https://t.me/XStreeeM">
                      <Icon.tg />
                    </a>
                  </Button>
                  <Button asChild variant="ghost-pill" size="icon-pill-sm" aria-label="WhatsApp">
                    <a href="#">
                      <Icon.wa />
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Stagger>
      </div>
    </section>
  );
}
