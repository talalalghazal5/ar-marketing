SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Clear existing data (optional but recommended for a clean seed)
TRUNCATE TABLE `marketing_platform`;
TRUNCATE TABLE `platforms`;
TRUNCATE TABLE `results`;
TRUNCATE TABLE `brand_goals`;
TRUNCATE TABLE `features`;
TRUNCATE TABLE `technologies`;
TRUNCATE TABLE `gallery_images`;
TRUNCATE TABLE `vfx_items`;
TRUNCATE TABLE `marketing_items`;
TRUNCATE TABLE `photography_items`;
TRUNCATE TABLE `design_items`;
TRUNCATE TABLE `development_items`;
TRUNCATE TABLE `items`;

-- 1. Insert Items
INSERT INTO `items` (`id`, `title`, `slug`, `description`, `type`, `featured`, `status`, `timeTook`, `created_at`, `updated_at`) VALUES
(1, 'قالب نكست جي اس', 'next-js-boilerplate', 'هذا قالب أساسي يمكنك البدء منه بدلاً من إنشاء قالب جديد في كل مرة تريد فيها بدء تطبيق نكست جي اس.', 'development', 1, 1, 3, NOW(), NOW()),
(2, 'متجر إلكتروني متكامل', 'e-commerce-store', 'منصة تجارة إلكترونية متكاملة مع كتالوج للمنتجات، سلة تسوق، وتكامل مع بوابات الدفع.', 'development', 1, 1, 42, NOW(), NOW()),
(3, 'جلسة تصوير زفاف', 'wedding-photography-portfolio', 'مجموعة صور فوتوغرافية رائعة لحفل زفاف تلتقط اللحظات الخاصة من الاحتفالات المختلفة.', 'photography', 1, 1, 14, NOW(), NOW()),
(4, 'هوية بصرية لشركة تقنية', 'brand-identity-for-tech-startup', 'نظام هوية بصرية متكامل يشمل الشعار، لوحة الألوان، الخطوط، ودليل العلامة التجارية لشركة تقنية مبتكرة.', 'design', 1, 1, 21, NOW(), NOW()),
(5, 'مؤثرات بصرية لإعلان منتج', 'product-commercial-vfx', 'مؤثرات بصرية لإعلان منتج يعرض هاتفاً ذكياً جديداً مع تأثيرات جزيئات سحرية وانتقالات سلسة.', 'vfx', 1, 1, 28, NOW(), NOW()),
(6, 'حملة تسويق عبر منصات التواصل', 'social-media-marketing-campaign', 'حملة تسويقية شاملة عبر وسائل التواصل الاجتماعي لعلامة تجارية للأزياء تستهدف جيل زد عبر منصات متعددة.', 'marketing', 1, 1, 56, NOW(), NOW()),
(7, 'تطبيق تتبع اللياقة البدنية', 'fitness-tracking-mobile-app', 'تطبيق للهواتف المحمولة متعدد المنصات لتتبع الأنشطة الرياضية والتغذية والتقدم مع ميزات اجتماعية.', 'development', 1, 1, 70, NOW(), NOW()),
(8, 'سلسلة تصوير بورتريه', 'portrait-photography-series', 'سلسلة صور فوتوغرافية احترافية تلتقط الأشخاص في ظروف إضاءة وإعدادات مختلفة.', 'photography', 1, 1, 21, NOW(), NOW()),
(9, 'إعادة تصميم موقع شركة', 'corporate-website-redesign', 'إعادة تصميم كاملة لموقع شركة مع التركيز على الجماليات الحديثة، وتحسين تجربة المستخدم، والتوافق مع الهواتف المحمولة.', 'design', 1, 1, 35, NOW(), NOW()),
(10, 'تحرير فيديو لفيلم وثائقي', 'nature-documentary-video-editing', 'تحرير فيديو احترافي لفيلم وثائقي عن الطبيعة يضم لقطات للحياة البرية من مختلف المتنزهات الوطنية.', 'vfx', 1, 1, 42, NOW(), NOW());

-- 2. Insert Type-Specific Records
INSERT INTO `development_items` (`id`, `itemId`, `url`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://github.com/example/boilerplate', NOW(), NOW()),
(2, 2, 'https://example-store.com', NOW(), NOW()),
(3, 7, 'https://fitnessapp.example.com', NOW(), NOW());

INSERT INTO `photography_items` (`id`, `itemId`, `created_at`, `updated_at`) VALUES
(1, 3, NOW(), NOW()),
(2, 8, NOW(), NOW());

INSERT INTO `design_items` (`id`, `itemId`, `brandOverview`, `created_at`, `updated_at`) VALUES
(1, 4, 'شركة تقنية مبتكرة تعمل بالذكاء الاصطناعي تركز على إحداث ثورة في خدمة العملاء من خلال روبوتات الدردشة.', NOW(), NOW()),
(2, 9, 'شركة خدمات مالية راسخة تسعى لتحديث وجودها على الإنترنت والتواصل مع الأجيال الشابة.', NOW(), NOW());

INSERT INTO `vfx_items` (`id`, `itemId`, `overview`, `result`, `created_at`, `updated_at`) VALUES
(1, 5, 'تم إنشاء مؤثرات بصرية مذهلة لإعلان هاتف ذكي، تضمنت تحولات للمنتج، ومحاكاة للجزيئات، وانتقالات سلسة بين المشاهد.', 'حصد الإعلان أكثر من مليوني مشاهدة على يوتيوب وزاد من الطلبات المسبقة للمنتج بنسبة 35٪.', NOW(), NOW()),
(2, 10, 'تم تحرير اللقطات الخام إلى قصة مقنعة، بما في ذلك تصحيح الألوان، وتصميم الصوت، والرسوم المتحركة (الموشن جرافيك).', 'تم اختيار الفيلم الوثائقي للعرض في 3 مهرجانات سينمائية دولية.', NOW(), NOW());

INSERT INTO `marketing_items` (`id`, `itemId`, `created_at`, `updated_at`) VALUES
(1, 6, NOW(), NOW());

-- 3. Insert Gallery Images (Cover Images for all, plus extra gallery images for photography)
INSERT INTO `gallery_images` (`itemId`, `image`, `is_cover`, `sort_order`, `created_at`, `updated_at`) VALUES
-- Covers
(1, 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(2, 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(3, 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(4, 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(5, 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(6, 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(7, 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(8, 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(9, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
(10, 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', 1, 0, NOW(), NOW()),
-- Additional for item 3 (Photography)
(3, 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80', 0, 1, NOW(), NOW()),
(3, 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80', 0, 2, NOW(), NOW()),
(3, 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80', 0, 3, NOW(), NOW()),
(3, 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80', 0, 4, NOW(), NOW()),
-- Additional for item 8 (Photography)
(8, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80', 0, 1, NOW(), NOW()),
(8, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80', 0, 2, NOW(), NOW()),
(8, 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80', 0, 3, NOW(), NOW()),
(8, 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80', 0, 4, NOW(), NOW());

-- 4. Insert Technologies
INSERT INTO `technologies` (`itemId`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Next.js', NOW(), NOW()),
(1, 'Shadcn', NOW(), NOW()),
(1, 'Zod', NOW(), NOW()),
(2, 'React', NOW(), NOW()),
(2, 'Node.js', NOW(), NOW()),
(2, 'MongoDB', NOW(), NOW()),
(2, 'Stripe', NOW(), NOW()),
(4, 'Figma', NOW(), NOW()),
(4, 'Adobe Illustrator', NOW(), NOW()),
(4, 'Adobe Photoshop', NOW(), NOW()),
(7, 'React Native', NOW(), NOW()),
(7, 'Node.js', NOW(), NOW()),
(7, 'MongoDB', NOW(), NOW()),
(7, 'AWS', NOW(), NOW()),
(9, 'Figma', NOW(), NOW()),
(9, 'Webflow', NOW(), NOW()),
(9, 'HTML5', NOW(), NOW()),
(9, 'CSS3', NOW(), NOW()),
(9, 'JavaScript', NOW(), NOW());

-- 5. Insert Features (Development)
INSERT INTO `features` (`developmentItemId`, `title`, `description`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'بدون الحاجة للبدء من الصفر', NULL, NULL, NOW(), NOW()),
(1, 'جاهز للإنتاج', NULL, NULL, NOW(), NOW()),
(2, 'إدارة المنتجات', NULL, NULL, NOW(), NOW()),
(2, 'مصادقة المستخدمين', NULL, NULL, NOW(), NOW()),
(2, 'تتبع الطلبات', NULL, NULL, NOW(), NOW()),
(2, 'لوحة تحكم للمديرين', NULL, NULL, NOW(), NOW()),
(3, 'تتبع النشاط الرياضي', NULL, NULL, NOW(), NOW()),
(3, 'تخطيط الوجبات', NULL, NULL, NOW(), NOW()),
(3, 'فيديوهات التمارين', NULL, NULL, NOW(), NOW()),
(3, 'المشاركة الاجتماعية', NULL, NULL, NOW(), NOW()),
(3, 'تحليلات التقدم', NULL, NULL, NOW(), NOW());

-- 6. Insert Brand Goals (Design)
INSERT INTO `brand_goals` (`designItemId`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'إنشاء هوية بصرية حديثة وموثوقة', NULL, NOW(), NOW()),
(1, 'ترسيخ مكانة العلامة التجارية في قطاع التقنية', NULL, NOW(), NOW()),
(1, 'إنشاء نظام مرن لمختلف التطبيقات', NULL, NOW(), NOW()),
(2, 'تحسين تفاعل المستخدمين والوقت المستغرق في الموقع', NULL, NOW(), NOW()),
(2, 'تعزيز التوافق مع الهواتف المحمولة', NULL, NOW(), NOW()),
(2, 'تحديث التصميم المرئي مع الحفاظ على هوية العلامة التجارية', NULL, NOW(), NOW());

-- 7. Insert Marketing Results
INSERT INTO `results` (`marketingItemId`, `title`, `value`, `description`, `created_at`, `updated_at`) VALUES
(1, 'زيادة التفاعل', '+150%', 'زيادة التفاعل بنسبة 150٪ مقارنة بالربع السابق', NOW(), NOW()),
(1, 'متابعين جدد', '50,000+', 'كسب 50 ألف متابع جديد على مختلف المنصات', NOW(), NOW()),
(1, 'نمو المبيعات', '+40%', 'زيادة المبيعات عبر الإنترنت بنسبة 40٪', NOW(), NOW()),
(1, 'مرات الظهور', '2M+', 'تحقيق أكثر من مليوني ظهور إجمالي للإعلانات', NOW(), NOW());

-- 8. Insert Platforms
INSERT INTO `platforms` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'انستجرام (Instagram)', NOW(), NOW()),
(2, 'تيك توك (TikTok)', NOW(), NOW()),
(3, 'فيسبوك (Facebook)', NOW(), NOW()),
(4, 'إكس (Twitter/X)', NOW(), NOW());

-- 9. Insert Marketing Platforms mapping
INSERT INTO `marketing_platform` (`marketingItemId`, `platformId`, `created_at`, `updated_at`) VALUES
(1, 1, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(1, 3, NOW(), NOW()),
(1, 4, NOW(), NOW());

SET FOREIGN_KEY_CHECKS = 1;
